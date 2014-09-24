// Description
//   A Hubot script that display the images from mstr.in, inspired by
//   aozora0000/hubot-meshi
//
// Configuration:
//   None
//
// Commands:
//   hubot mstr [bomb [<N>]] - display the MESHI-TERRO images
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var cache, fetch, load, loading, merge, photoUrl, shuffle;
  require('hubot-arm')(robot);
  loading = false;
  cache = [];
  merge = function(a1, a2) {
    var a, i2, _i, _len;
    a = a1.slice();
    for (_i = 0, _len = a2.length; _i < _len; _i++) {
      i2 = a2[_i];
      if (!a.some(function(i) {
        return i.id === i2.id;
      })) {
        a.push(i2);
      }
    }
    return a;
  };
  fetch = function(photos, page) {
    return robot.arm('request')({
      method: 'GET',
      url: 'https://mstr.in/api/photos.json',
      qs: {
        page: page
      },
      json: true
    }).then(function(res) {
      photos = merge(photos, res.body.photos);
      return robot.arm('timer')(1000).then(function() {
        if (res.body.next_page) {
          return fetch(photos, page + 1);
        } else {
          return photos;
        }
      });
    });
  };
  load = function() {
    loading = true;
    return fetch([], 1).then(function(photos) {
      cache = photos;
      return loading = false;
    });
  };
  photoUrl = function(photo) {
    return "https://pic.mstr.in/images/" + photo.uid + ".jpg";
  };
  shuffle = function(a) {
    var i, j, s, w, _i, _ref;
    s = a.slice();
    for (i = _i = _ref = s.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
      j = Math.floor(Math.random() * i);
      w = s[j];
      s[j] = s[i];
      s[i] = w;
    }
    return s;
  };
  robot.respond(/mstr(\s+bomb(?:\s+(\d+))?)?$/i, function(res) {
    var count, photos, _ref;
    if (loading) {
      return res.send('Now loading...');
    }
    count = parseInt((res.match[1] ? (_ref = res.match[2]) != null ? _ref : '5' : '1'), 10);
    photos = shuffle(cache).slice(0, count);
    return res.send(photos.map(photoUrl).join('\n'));
  });
  return load();
};

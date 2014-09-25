# Description
#   A Hubot script that display the images from mstr.in, inspired by
#   aozora0000/hubot-meshi
#
# Configuration:
#   None
#
# Commands:
#   hubot mstr [bomb [<N>]] - display the MESHI-TERRO images
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  require('hubot-arm') robot

  loading = false
  cache = []

  merge = (a1, a2) ->
    a = a1.slice()
    a.push(i2) for i2 in a2 when !a.some((i) -> i.id is i2.id)
    a

  fetch = (photos, page) ->
    robot.arm('request')
      method: 'GET'
      url: 'https://mstr.in/api/photos.json'
      qs:
        page: page
      json: true
    .then (res) ->
      photos = merge photos, res.body.photos
      robot.arm('timer')(1000).then ->
        if res.body.next_page then fetch(photos, page + 1) else photos

  load = ->
    loading = true
    fetch([], 1).then (photos) ->
      cache = photos
      loading = false

  photoUrl = (photo) ->
    "https://pic.mstr.in/images/#{photo.uid}.jpg"

  shuffle = (a) ->
    s = a.slice()
    for i in [(s.length - 1)..0]
      j = Math.floor(Math.random() * i)
      w = s[j]
      s[j] = s[i]
      s[i] = w
    s

  robot.respond /mstr(\s+bomb(?:\s+(\d+))?)?$/i, (res) ->
    return res.send('Now loading...') if loading
    count = parseInt (if res.match[1] then res.match[2] ? '5' else '1'), 10
    photos = shuffle(cache)[0...count]
    for photo in photos
      res.send photoUrl photo

  load()

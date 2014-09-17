# hubot-mstr

A Hubot script that display the images from [mstr.in](http://mstr.in), inspired by [aozora0000/hubot-meshi](https://github.com/aozora0000/hubot-meshi).

![](http://img.f.hatena.ne.jp/images/fotolife/b/bouzuya/20140918/20140918004323.gif)

## Installation

    $ npm install git://github.com/bouzuya/hubot-mstr.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-mstr.git#TAG'

## Example

    bouzuya> hubot help mstr
      hubot> hubot mstr [bomb [<N>]] - display the MESHI-TERRO images

    bouzuya> hubot mstr
      hubot> https://pic.mstr.in/images/bdea2c2bf3477a9f9e47d6b38d7da580.jpg

    bouzuya> hubot mstr bomb
      hubot> https://pic.mstr.in/images/280cfae6130af12c4e30d5fe02b0c4bb.jpg
             https://pic.mstr.in/images/465ea1d609d410d25ab5739e3ddff14f.jpg
             https://pic.mstr.in/images/7a0881a57a19561165abdebb4a0dddf0.jpg
             https://pic.mstr.in/images/256ebf0b78e53ee50fe67ef4c191c933.jpg
             https://pic.mstr.in/images/51d286c23230f998412db5740f20b00b.jpg

    bouzuya> hubot mstr bomb 2
      hubot> https://pic.mstr.in/images/a723f01e19227a7952a42e2a93843045.jpg
             https://pic.mstr.in/images/9ebf283d79d5dec3a3be23d5f9e5c9cc.jpg

## Configuration

See [`src/scripts/mstr.coffee`](src/scripts/mstr.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-mstr
[travis-badge]: https://travis-ci.org/bouzuya/hubot-mstr.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-mstr
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-mstr.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-mstr
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-mstr.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net

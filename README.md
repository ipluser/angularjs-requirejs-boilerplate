## angularjs-requirejs-boilerplate
An complete angularjs requirejs boilerplate for node. There are angular and test samples in the project,
you can quick start your new project with angularjs-requirejs-boilerplate.

## Features
### Front-end
  * [angularjs](http://angularjs.org/), a JavaScript MVW Framework
  * [bootstrap](http://getbootstrap.com/), the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web
  * [jquery](https://jquery.org/), the Write Less, Do More, JavaScript Library
  * [less](http://lesscss.org/), a CSS pre-processor
  * [requirejs](http://requirejs.org/), a JavaScript file and module loader
  * etc

### Back-end
  * [expressjs](http://expressjs.com/), sinatra inspired web development framework for node.js
  * [gulp](http://gulpjs.com/), the streaming build system
  * [swig](http://paularmstrong.github.io/swig/), a simple, powerful, and extendable JavaScript Template Engine
  * etc

## Quick Start
### Install Dependencies:
```bash
$ bower install
$ npm install
```

### Development
Development Environment using gulp-nodemon, gulp-livereload and gulp-jshint.
 1. Make sure <strong>isDevMode</strong> configuration is <strong>true</strong> in <strong>locals.js</strong>
 2. Install [livereload chrome extension](http://livereload.com/extensions/)
 3. Start the server with `gulp start-develop`

### Production
 1. Make sure <strong>isDevMode</strong> configuration is <strong>false</strong> in <strong>locals.js</strong>
 2. Compile and build with `gulp`
 3. Start the server with pm2 or others

### Configuration
System configuration are stored in the <strong>locals.js</strong> file.

## Test
Test using karma and jasmine, run the test with `npm test` or `karma start`. Unit and coverage test report are stored in report directory.

## Changelog
### 1.0.0
- initial release<br>
18.10.2015

### 1.1.0
- add gulp task named build-views that registers AngularJS templates in the $templateCache
- add karma and size into gulpfile
- replace chrome launcher with phantomjs launcher in karma
- modify layout launcher and suffix of templateUrl<br>
31.10.2015

## License

  [MIT](LICENSE)

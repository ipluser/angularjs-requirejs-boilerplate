## angularjs-requirejs-boilerplate
A complete angularjs requirejs boilerplate for node.

There are angular and test samples in the project,
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
Development Environment using gulp-nodemon, [browser-sync](https://www.browsersync.io/) and gulp-jshint.
 1. Make sure <strong>isDevMode</strong> configuration is <strong>true</strong> in <strong>locals.js</strong>
 2. Start development mode with `gulp --development`
 3. Input `http://localhost:devPort` with browsers

### Production
 1. Make sure <strong>isDevMode</strong> configuration is <strong>false</strong> in <strong>locals.js</strong>
 2. Compile and build with `gulp --production`
 3. Start the server with node or pm2 or others
 4. Input `http://localhost:port` with browsers

### Configuration
System configuration are stored in the <strong>locals.js</strong> file.

### Samples Page
Start the server and input `http://localhost:port/samples` with browsers.

## Gulp
Show task list with `gulp help`.

## Test
Test using karma and jasmine, run the test with `npm test` or `karma start`. Unit and coverage test report are stored in report directory.

## Changelog
### 2.3.0
- watch gulp files
- the browser reload while restart nodemon<br>
27.01.2016

### 2.2.1
- fix task can not separate execution with development mode<br>
25.01.2016

### 2.2.0
- add build-templates task to optimize ngTemplates that registers AngularJS templates in the $templateCache
- add error and listening event to server<br>
17.01.2016

### 2.1.0
- replace gulp-livereload with browser-sync
- add gulp-help, gulp-size and others gulp components
- remove less.js<br>
10.01.2016

### 2.0.0
- adjust directory and code of project
- add angular samples page
- add README.md preview<br>
01.01.2016

### 1.1.1
- fix mobile can not redirect
- fix can not define custom router<br>
18.11.2015

### 1.1.0
- add gulp task named build-views that registers AngularJS templates in the $templateCache
- add karma and size into gulpfile
- replace chrome launcher with phantomjs launcher in karma
- modify layout launcher and suffix of templateUrl<br>
31.10.2015

### 1.0.0
- initial release<br>
18.10.2015

## License
  [MIT](https://github.com/ipluser/angularjs-requirejs-boilerplate/blob/master/LICENSE)

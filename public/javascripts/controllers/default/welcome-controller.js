define([
  'angularApp', 'react',
  'jsx!jsxdir/Timer'
], function (
  angularApp, React,
  Timer
) {

  angularApp.controller('welcomeCtrl', ['$scope', function($scope) {
    var start = new Date();
    Timer = React.createFactory(Timer);

    React.render(
        Timer({start: start}),
        document.getElementById('testJSX')
    );
  }]);

});
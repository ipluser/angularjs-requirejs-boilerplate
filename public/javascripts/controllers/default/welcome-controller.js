define([
  'angularApp', 'react'
], function (
  angularApp, React
) {

  angularApp.controller('welcomeCtrl', ['$scope', function($scope) {
    $scope.test = 'sss';

    var CommentBox = React.createClass({displayName: 'CommentBox',
      render: function() {
        return (
          React.createElement('div', {className: "commentBox"},
            "Hello, world! I am a CommentBox."
          )
        );
      }
    });
    React.render(
      React.createElement(CommentBox, null),
      document.getElementById('testReact')
    );
  }]);

});
define([
  'angularApp'
], function(
  angularApp
) {

  angularApp.directive('fullScreenBackground', function() {
    return {
      restrict: 'AE',
      scope: {
        imageSrc: '@',
        initOptions: '='
      },
      template: '<div>'
          + '<img ng-src="{{imageSrc}}" width="800px" height="1000px" />'
          + '</div>',
      replace: true,
      transclude: true,
      compile: function(elemt, attrs) {

        function fillBg(selector, parentobj) {
          var windowHeight = $(window).height();
          var windowWidth = $(window).width();

          $(selector, parentobj).each(function () {
            var imgHeight = $(this).attr("height");
            var imgWidth = $(this).attr("width");

            var newWidth = windowWidth;
            var newHeight = (windowWidth / imgWidth) * imgHeight;
            var topMargin = ((newHeight - windowHeight) / 2) * -1;
            var leftMargin = 0;

            if (newHeight < windowHeight) {
              newWidth = (windowHeight / imgHeight) * imgWidth;
              newHeight = windowHeight;
              topMargin = 0;
              leftMargin = ((newWidth - windowWidth) / 2) * -1;
            }

            $(this).css({
              height: newHeight + "px",
              width: newWidth + "px",
              marginLeft: leftMargin + "px",
              marginTop: topMargin + "px",
              display: "block"
            });
          });
        }

        return {
          post: function($scope, elemt, attrs) {
            $scope.optionsArr = {
              selector: "img",
              fillOnResize: true,
              defaultCss: true
            };

            if($scope.initOptions) {
              $.extend($scope.optionsArr, $scope.initOptions);
            }

            elemt.each(function () {
              if ($scope.optionsArr.defaultCss == true) {
                $(elemt).css({
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  zIndex: 0
                });
              }

              if ($scope.optionsArr.fillOnResize == true) {
                $(window).resize(function () {
                  fillBg($scope.optionsArr.selector, elemt);
                });
              }

              fillBg($scope.optionsArr.selector, elemt);
            });
          }
        }
      }
    }
  })

});
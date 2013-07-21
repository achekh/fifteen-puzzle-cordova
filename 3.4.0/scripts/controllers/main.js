'use strict';

angular.module('fifteenApp')
    .controller('MainCtrl', function ($scope, $window, $route) {
        if ($route.current) {
            $scope.title = $route.current.title;
        }

        $scope.toggleMainNav = function () {
            $scope.animate = true;
            $scope.slideIn = !$scope.slideIn;
            console.log('slideIn ' + $scope.slideIn);
        }

        function resetMainNav() {
            $scope.slideIn = false;
            // remove class animate to prevent the main nav open again when open a page
            $scope.animate = false;
        }

        // main nav links
        $scope.links =
            [
              { url: '#/', title: 'Home' },
              { url: '#/game', title: 'Игра' },
              { url: '#/about', title: 'About' }
            ];

        // hide the main nav
        $scope.hideMainNav = resetMainNav;

        // go back in history
        $scope.goBack = function () {
            resetMainNav();
            $window.history.back();
        }
    });

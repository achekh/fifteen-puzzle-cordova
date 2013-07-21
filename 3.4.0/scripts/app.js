'use strict';
// TODO: fix scrolling content on iPhone
// TODO: retrieve press releases and render it in press releases page
// TODO: move app into phonegap
// TODO: open external URL in inChild Browser
// TODO: create factory for video
// TODO: create factory for podcasts
// TODO: store podcasts
// TODO: use webworks for ajax
// TODO: connection alert if there's not internet

angular.module('fifteenApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                title: "Пятнашки"
            })
            .when('/game', {
                templateUrl: 'views/board.html',
                controller: 'GameCtrl',
                title: "Игра"
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'MainCtrl',
                title: "About"
            })
            .otherwise({
                redirectTo: '/'
            });
    })



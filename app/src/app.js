var appicenter = angular.module('appicenter', ['firebase', 'ngRoute','mgcrea.ngStrap']);

appicenter.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })


    .when('/admin/scoreboard', {
      templateUrl: 'templates/scoreboard.html',
      controller: 'ScoreboardCtrl'
    })
    .when('/admin/scoreboard-controller', {
      templateUrl: 'templates/scoreboard-controller.html',
      controller: 'ScoreboardControllerCtrl'
    })


    .otherwise({
      redirectTo: '/'
    });
}]);

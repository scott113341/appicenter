var appicenter = angular.module('appicenter', ['firebase', 'ngRoute']);

appicenter.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/scoreboard', {
      templateUrl: 'templates/scoreboard.html',
      controller: 'ScoreboardCtrl'
    })
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    });
}]);

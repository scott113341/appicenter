var appicenter = angular.module('appicenter', ['firebase', 'ngRoute']);

appicenter.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/scoreboard.html',
      controller: 'ScoreboardCtrl'
    });
}]);

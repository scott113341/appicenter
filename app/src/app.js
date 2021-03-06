var appicenter = angular.module('appicenter', ['firebase', 'ngRoute','mgcrea.ngStrap','ngAnimate','ngAnimate-animate.css','angularMoment']);

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
    .when('/logout', {
      templateUrl: 'templates/logout.html',
      controller: 'LogoutCtrl'
    })
    .when('/auction', {
      templateUrl: 'templates/auction.html',
      controller: 'AuctionCtrl'
    })


    .when('/admin', {
      templateUrl: 'templates/admin.html',
      controller: 'AdminCtrl'
    })
    .when('/admin/scoreboard', {
      templateUrl: 'templates/scoreboard.html',
      controller: 'ScoreboardCtrl'
    })
    .when('/admin/scoreboard-controller', {
      templateUrl: 'templates/scoreboard-controller.html',
      controller: 'ScoreboardControllerCtrl'
    })
    .when('/admin/auctions', {
      templateUrl: 'templates/admin-auction.html',
      controller: 'AuctionAdminCtrl'
    })


    .otherwise({
      redirectTo: '/'
    });
}]);

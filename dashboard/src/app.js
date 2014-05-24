var angular = require('angular');
var firebase = require('client-firebase');
var angularfire = require('angularfire-browserify');

var app = angular.module('app', ['firebase','ngAnimate'])

function MyController($scope, $firebase) {
var ref = new Firebase("https://lksg2hcetqi.firebaseio-demo.com/");
$scope.messages = $firebase(ref);
$scope.addMessage = function(e) {
  if (e.keyCode != 13) return;
  $scope.messages.$add({from: $scope.name, body: $scope.msg});
  $scope.msg = "";
};
}

console.log('hello');


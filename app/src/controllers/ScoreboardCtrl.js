appicenter.controller('ScoreboardCtrl', ['$scope', 'firebaseService', function($scope, firebaseService) {
  $scope.scoreboard = firebaseService('/scoreboard');
  $scope.scoreboard.$bind($scope, 'scoreboard');
}]);

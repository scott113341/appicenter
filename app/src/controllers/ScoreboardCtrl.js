appicenter.controller('ScoreboardCtrl', ['$scope', 'firebaseService', function($scope, firebaseService) {
  $scope.meow = 'this is what meow says';
  firebaseService.$bind($scope, 'fb');
}]);

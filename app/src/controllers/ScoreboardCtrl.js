appicenter.controller('ScoreboardCtrl', ['$scope', 'firebaseService', '$firebase', '$firebaseSimpleLogin', function($scope, firebaseService, $firebase, $firebaseSimpleLogin) {

  $scope.meow = 'this is what meow says';

  firebaseService.$bind($scope, 'fb');

  var ref = new Firebase('https://appicenter.firebaseio.com/');
  $scope.auth = $firebaseSimpleLogin(ref);
}]);

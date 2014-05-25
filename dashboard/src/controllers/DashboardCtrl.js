appicenter.controller('DashboardCtrl', ['$scope', 'firebaseService', function($scope, firebaseService) {
  console.log('controller');

  $scope.meow = 'this is what meow says';

  firebaseService.$bind($scope, 'fb');
}]);

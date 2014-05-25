appicenter.controller('ScoreboardControllerCtrl', ['$scope', 'firebaseService', function($scope, firebaseService) {
  $scope.views = [
    {
      name: 'Auction',
      id: 'auction',
      options: {}
    },
    {
      name: 'Instagram',
      id: 'instagram',
      options: {}
    }
  ];

  $scope.current_view = firebaseService('/scoreboard/current_view');
  $scope.current_view.$bind($scope, 'current_view');
}]);

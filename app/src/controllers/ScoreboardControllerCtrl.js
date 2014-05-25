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


  var viewRef = firebaseService('/scoreboard/current_view');
  viewRef.$bind($scope, 'current_view');

  var photosRef = firebaseService('/instagram/photos');
  photosRef.$bind($scope, 'photos');

  var currentPhotoRef = firebaseService('/scoreboard/current_photo');
  currentPhotoRef.$bind($scope, 'current_photo');





}]);

appicenter.controller('ScoreboardControllerCtrl', ['$scope', 'firebaseService', '$timeout', function($scope, firebaseService, $timeout) {
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








  var auctionsRef = firebaseService('/auctions');
  auctionsRef.$bind($scope, 'auctions').then(function() {
    $scope.update();
  });

  var currentAuctionRef = firebaseService('/scoreboard/current_auction');
  currentAuctionRef.$bind($scope, 'current_auction');
  $scope.displayAuction = function(auction) {
    $scope.current_auction = auction.$id;
  };

  $scope.update = function() {
    $timeout(function() {
      $scope.update();
    }, 1000);
  };

  $scope.timeRemaining = function(auction) {
    var percent = (Date.now() - auction.start_time) / auction.duration * 100;
    var time_remaining = (auction.duration - auction.duration * percent / 100) / 1000;
    var remaining = Math.floor(time_remaining);

    if (remaining < 0) return 0;
    else return remaining;
  };

  $scope.inProgress = function(auction) {
    return Date.now() < auction.end_time;
  };

  $scope.startAuction = function(auction) {
    auction.start_time = Date.now();
    auction.end_time = Date.now() + auction.duration;
  };
}]);

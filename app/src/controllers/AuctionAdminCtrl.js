appicenter.controller('AuctionAdminCtrl', ['$scope', '$timeout', 'firebaseService', function($scope, $timeout, firebaseService) {
  var auctionsRef = firebaseService('/auctions');
  auctionsRef.$bind($scope, 'auctions').then(function() {
    $scope.update();
  });

  $scope.update = function() {
    $timeout(function() {
      $scope.update();
    }, 1000);
  };

  $scope.inProgress = function(auction) {
    return Date.now() < auction.end_time;
  };

  $scope.timeRemaining = function(auction) {
    var percent = (Date.now() - auction.start_time) / auction.duration * 100;
    var time_remaining = (auction.duration - auction.duration * percent / 100) / 1000;
    var remaining = Math.floor(time_remaining);

    if (remaining < 0) return 0;
    else return remaining;
  };



  $scope.createAuction = function() {
    console.log($scope.auctions);

    $scope.auctions.$add({
      name: $scope.new_auction.name,
      description: $scope.new_auction.description,
      duration: $scope.new_auction.duration*60*1000,
      image: $scope.new_auction.image,
      charity: $scope.new_auction.charity,
      charity_image: $scope.new_auction.charity_image,
      start_time: 0,
      end_time: 0,
      start_price: $scope.new_auction.start_price,
      current_price: 0,
      highest_bidder: 'none'
    });
  };



  $scope.startAuction = function(auction) {
    auction.start_time = Date.now();
    auction.end_time = Date.now() + auction.duration;
  };
}]);

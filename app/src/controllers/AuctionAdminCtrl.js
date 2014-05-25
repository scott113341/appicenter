appicenter.controller('AuctionAdminCtrl', ['$scope', 'firebaseService', function($scope, firebaseService) {
  var auctionsRef = firebaseService('/auctions');
  auctionsRef.$bind($scope, 'auctions');


  $scope.inProgress = function(auction) {
    return Date.now() < auction.end_time;
  };



  $scope.createAuction = function() {
    $scope.auctions.$add({
      name: $scope.new_auction.name,
      duration: $scope.new_auction.duration*60*1000,
      image: $scope.new_auction.image,
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

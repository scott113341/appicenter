appicenter.controller('ScoreboardCtrl', ['$scope', '$route', '$timeout', 'firebaseService', function($scope, $route, $timeout, firebaseService) {
  var scoreboardRef = firebaseService('/scoreboard');
  scoreboardRef.$bind($scope, 'scoreboard');


  var auctionsRef = firebaseService('/auctions');
  auctionsRef.$bind($scope, 'auctions');


   // get the current auction's id from the scoreboard
  var currentAuctionRef = firebaseService('/scoreboard/current_auction');
  currentAuctionRef.$bind($scope, 'currentAuction').then(function() {

    // reload page if current action id changes
    currentAuctionRef.$on('change', function() {
      $route.reload();
    });

    // get the current auction
    var auctionsRef = firebaseService('/auctions');
    var auctionRef = auctionsRef.$child($scope.currentAuction);

    auctionRef.$bind($scope, 'auction').then(function() {
      $scope.updateProgress();
    });
  });


  $scope.updateProgress = function() {
    var auction = $scope.auction;
    var percent = (Date.now() - auction.start_time) / auction.duration * 100;
    var time_remaining = (auction.duration - auction.duration * percent / 100) / 1000;

    $scope.progress = {
      percent: percent.toFixed(2) + '%',
      time_remaining: Math.floor(time_remaining)
    };

    if (auction.start_time == 0) $scope.status = 0;
    else if (time_remaining > 0) $scope.status = 1;
    else if (time_remaining <= 0) $scope.status = 2;

    $timeout(function() {
      $scope.updateProgress();
    }, 1000);
  };

}]);

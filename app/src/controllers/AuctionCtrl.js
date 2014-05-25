appicenter.controller('AuctionCtrl', ['$scope', '$location', '$timeout', 'firebaseService', 'loginService', function($scope, $location, $timeout, firebaseService, loginService) {
  // make sure user is logged in
  $scope.auth = loginService;
  $scope.auth.$getCurrentUser().then(function(user) {
    console.log(user);
    if (!user) {
      $location.path('/login');
    }
  });



  var auctionsRef = firebaseService('/auctions');
  auctionsRef.$bind($scope, 'auctions').then(function() {
    $scope.auction = $scope.auctions['-JNm_v_JD9F7gsFpuDvO'];
    $scope.updateProgress();
  });



  $scope.updateProgress = function() {
    var auction = $scope.auction;
    var percent = (Date.now() - auction.start_time) / auction.duration * 100;
    var time_remaining = (auction.duration - auction.duration * percent / 100) / 1000;

    $scope.progress = {
      percent: percent.toFixed(2) + '%',
      time_remaining: Math.floor(time_remaining)
    };

    $timeout(function() {
      $scope.updateProgress();
    }, 1000);
  };
}]);

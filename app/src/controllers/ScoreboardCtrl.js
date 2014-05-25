appicenter.controller('ScoreboardCtrl', ['$scope', 'firebaseService', function($scope, firebaseService) {
  var scoreboardRef = firebaseService('/scoreboard');
  scoreboardRef.$bind($scope, 'scoreboard');


  var auctionRef = firebaseService('/auctions');
  auctionRef.$bind($scope, 'auctions');

}]);

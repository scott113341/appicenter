appicenter.controller('AuctionCtrl', ['$scope', '$location', 'loginService', function($scope, $location, loginService) {
  // make sure user is logged in
  $scope.auth = loginService;
  $scope.auth.$getCurrentUser().then(function(user) {
    console.log(user);
    if (!user) {
      $location.path('/login');
    }
  });
}]);

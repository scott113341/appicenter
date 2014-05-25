appicenter.controller('HomeCtrl', ['$scope', 'loginService', function($scope, loginService) {
  $scope.auth = loginService;
}]);

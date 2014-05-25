appicenter.controller('LogoutCtrl', ['$scope', 'loginService', function($scope, loginService) {
  $scope.auth = loginService;
  $scope.auth.$logout();
}]);

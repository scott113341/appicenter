appicenter.controller('LoginCtrl', ['$scope', 'loginService', function($scope, loginService) {
  $scope.auth = loginService;

  $scope.email = 'scott.the.hardy@gmail.com';
  $scope.password = 'a';

  $scope.login = function() {
    $scope.auth.$login('password', {
        email: $scope.email,
        password: $scope.password
      })
      .then(function(user) {
        console.log(user);
      }, function(error) {
        console.log(error);
      });
  };
}]);

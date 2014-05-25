appicenter.controller('LoginCtrl', ['$scope', '$location', 'loginService', function($scope, $location, loginService) {
  $scope.auth = loginService;

  // redirect if logged in
  if ($scope.auth.user) {
    $location.path('/');
  }

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

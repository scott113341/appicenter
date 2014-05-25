appicenter.factory('loginService', ['$firebaseSimpleLogin', function($firebaseSimpleLogin) {
  var ref = new Firebase('https://appicenter.firebaseio.com/');
  return $firebaseSimpleLogin(ref);
}]);

appicenter.factory('firebaseService', ['$firebase', function($firebase) {
  return function(path) {
    var ref = new Firebase('https://appicenter.firebaseio.com' + path);
    return $firebase(ref);
  }
}]);

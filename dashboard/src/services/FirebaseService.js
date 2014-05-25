appicenter.factory('firebaseService', ['$firebase', function($firebase) {
  var ref = new Firebase('https://appicenter.firebaseio.com/');
  return $firebase(ref);
}]);

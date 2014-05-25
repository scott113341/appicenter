appicenter.filter("zeroToDash", function() {
  return function(input) {
    if (input == 0) return '-';
    else return input;
  }
});

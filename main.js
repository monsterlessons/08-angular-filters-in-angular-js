var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope) {
  $scope.money1 = '1.22$';
  $scope.money2 = '$2.33';
  $scope.money3 = '4.33';
});

app.filter('moneyFilter', function () {
  return function (str) {
    var lastChar = str.slice(-1),
        firstChar = str.slice(0, 1),
        slicedPart;

    if (lastChar === '$') {
      slicedPart = str.slice(0, str.length - 1);
      return '$' + slicedPart;
    } else if (firstChar === '$') {
      return str;
    } else {
      return '$' + str;
    }
  };
});

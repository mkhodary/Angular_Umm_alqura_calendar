// http://keith-wood.name/calendars.html
(function () {
    'use strict';

    var app = angular.module('app', ['kdate']);

    app.controller('mainController', ['$scope', function ($scope) {
        $scope.date1 = new Date();
        $scope.date2;
        $scope.date3;
        $scope.date4;
        $scope.date5;
}]);
})();
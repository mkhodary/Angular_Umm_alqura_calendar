// http://keith-wood.name/calendars.html

var app = angular.module('app',[]);

app.controller('mainController', ['$scope', function($scope){
    $scope.greeting = 'welcome!';
    $scope.date1 = new Date();
    $scope.date2 = new Date();
    $scope.date3 = new Date();
    $scope.date4 = new Date();
    $scope.date5 = new Date();
}]);
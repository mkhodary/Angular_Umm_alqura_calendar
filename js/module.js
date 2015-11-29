// http://keith-wood.name/calendars.html

var app = angular.module('app',[]);

app.controller('mainController', ['$scope', function($scope){
    $scope.greeting = 'welcome!';
    $scope.date = new Date();
}]);
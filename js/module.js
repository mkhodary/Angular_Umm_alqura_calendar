// http://keith-wood.name/calendars.html

var app = angular.module('app',[]);

app.controller('mainController', ['$scope', function($scope){
    $scope.greeting = 'welcome!';
    $scope.test = "test";
    
    $scope.datepickerconfig = {
        instance: 'ummalqura', // Use empty instance in case of geogerian calendar
        language: 'en'
    };
}]);
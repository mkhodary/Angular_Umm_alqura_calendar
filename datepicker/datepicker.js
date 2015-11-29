angular.module('app')
    
.directive('commonDatepicker', function(){
    return{
        restrict: 'E',
        scope: {
          config : '='
        },
        templateUrl: 'datepicker/datepicker.html'
    };
});
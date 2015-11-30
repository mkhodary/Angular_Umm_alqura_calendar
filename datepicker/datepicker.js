angular.module('app')

.directive('kdatepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                
                // Read attribute values.
                var calendarType = attrs.calendartype;
                var dateFormat = attrs.dateformat;
                var language = attrs.language;
                
                if (!ngModelCtrl.$modelValue){
                    // throw exception if model is null or undefined.
                    throw "kdatepicker ngModel has to be specified";
                    return;
                }
                
                var initDate = new Date(ngModelCtrl.$modelValue);
                
                // Get julian date.
                var jdate = $.calendars.instance().newDate( 
                parseInt(initDate.getFullYear(), 10), 
                parseInt(initDate.getMonth() + 1, 10), 
                parseInt(initDate.getDate(), 10)).toJD();
                
                // Get date result that will be dispalyed.
                var dateResult = $.calendars.instance(calendarType, language).fromJD(jdate);
                
                $.calendarsPicker.setDefaults($.calendarsPicker.regionalOptions['']);
                
                // Use jquery to setup the calendar.
                var calendar = element.calendarsPicker(
                    $.extend({calendar: $.calendars.instance(calendarType, language)},
                         $.calendarsPicker.regionalOptions[language]));
                
                // set date format.
                element.calendarsPicker('option', {dateFormat: dateFormat});
                
                // set date result to fill html input.
                element.calendarsPicker("setDate", dateResult);
                
                element.calendarsPicker({calendar: calendar, onSelect: function(date){
                    scope.$apply(function () {
                            ngModelCtrl.$setViewValue(date);
                        });
                }});
                
            });
        }
    }
});
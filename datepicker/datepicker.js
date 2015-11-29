angular.module('app')

.directive('kdatepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                
                // Read attribute values
                var calendarType = attrs.calendartype;
                var dateFormat = attrs.dateformat;
                var language = attrs.language;
                
                $.calendarsPicker.setDefaults($.calendarsPicker.regionalOptions['']);
                
                // Use jquery to setup the calendar
                var calendar = element.calendarsPicker($.extend( {calendar: $.calendars.instance(calendarType, language)},
                                         $.calendarsPicker.regionalOptions[language]));
                
                /*var calendar = $.calendars.instance(calendarType, language);
                $.calendarsPicker.regionalOptions[language];*/
                
                element.calendarsPicker({calendar: calendar, onSelect: function(date){
                    scope.$apply(function () {
                            ngModelCtrl.$setViewValue(date);
                        });
                }});
                
                element.calendarsPicker('option', {dateFormat: dateFormat});
            });
        }
    }
});
/* http://mkhodary.com
   kdatepicker.js
   Written by Mohamed Elkhodary - December 2015.
   Available under the MIT license. 
   Please attribute the author if you use it. */

(function () {
    'use strict';

    angular.module('kdate')

    .directive('kdatepicker', function () {
        return {
            restrict: 'A',
            scope: '=ngModel',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                $(function () {
                    // Read attribute values.
                    var calendarType = attrs.calendartype;
                    var dateFormat = attrs.dateformat;
                    var language = attrs.language;
                    var showOnFocus = attrs.showonfocus === 'true';
                    var btnText = attrs.btntriggertext ? attrs.btntriggertext : '*';
                    var dateResult = null;

                    ngModel.$formatters.push(function (value) {
                        return $filter('kdate')(value, dateFormat);
                    });

                    if (ngModel.$modelValue) {

                        var initDate = new Date(ngModel.$modelValue);

                        // Get julian date.
                        var jdate = $.calendars.instance().newDate(
                            parseInt(initDate.getFullYear(), 10),
                            parseInt(initDate.getMonth() + 1, 10),
                            parseInt(initDate.getDate(), 10)).toJD();

                        // Get date result that will be dispalyed.
                        dateResult = $.calendars.instance(calendarType, language).fromJD(jdate);
                    }

                    $.calendarsPicker.setDefaults($.calendarsPicker.regionalOptions['']);

                    var showTriggerText = '<button type="button">' + btnText + '</button>';
                    if (showOnFocus == true) {
                        showTriggerText = '';
                    }

                    // Use jquery to setup the calendar.
                    var calendar = element.calendarsPicker($.extend({
                            showOnFocus: showOnFocus,
                            showTrigger: showTriggerText,
                            calendar: $.calendars.instance(calendarType, language)
                        },
                        $.calendarsPicker.regionalOptions[language], {
                            onSelect: function (date) {
                                scope.$apply(function () {
                                    date = new Date(date);
                                    var result;
                                    if (calendarType === "ummalqura") {
                                        var jdate = $.calendars.instance("ummalqura").newDate(
                                            parseInt(date.getFullYear(), 10),
                                            parseInt(date.getMonth() + 1, 10),
                                            parseInt(date.getDate(), 10)).toJD();

                                        // Get date result that will be dispalyed.
                                        var dateResult = $.calendars.instance().fromJD(jdate);
                                        result = new Date(dateResult);
                                        result.setHours(date.getHours());
                                        result.setMinutes(date.getMinutes());
                                        result.setSeconds(date.getSeconds());
                                        result.setMilliseconds(date.getMilliseconds());
                                    } else {
                                        result = date;
                                    }
                                    ngModel.$setViewValue(result);
                                });
                            }
                        }));

                    // set date format.
                    element.calendarsPicker('option', {
                        dateFormat: dateFormat
                    });

                    if (ngModel.$modelValue) {
                        // set date result to fill html input.
                        element.val('').calendarsPicker("setDate", dateResult);
                    }
                });
            }
        }
    });
})();
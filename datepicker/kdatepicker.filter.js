/* http://mkhodary.com
   kdatepicker.js
   Written by Mohamed Elkhodary - December 2015.
   Available under the MIT license. 
   Please attribute the author if you use it. */

(function () {
    'use strict';

    angular.module('app')
    
    .filter('kdate', function(){
        return function(input, dateformat){
            var months = 'محرم_صفر_ربيع الأول_ربيع الأخر_جمادي الأول_جمادي الأخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة';
            var monthsArr = months.split('_');
            
            var date = new Date(input);
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();
            
            return monthsArr[month] + ', '+ + day + ' ' + year;
        }
    })
})();
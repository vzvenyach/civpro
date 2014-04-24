// rule6.js

var moment = require('moment');
require('./moment-holidays');

function hours () {
 	return false;
}

function days (start_day, period) {
 	//(1) Period Stated in Days or a Longer Unit. When the period is stated in days or a longer unit of time:
		//(A) exclude the day of the event that triggers the period;
		//(B) count every day, including intermediate Saturdays, Sundays, and legal holidays; and
		//(C) include the last day of the period, but if the last day is a Saturday, Sunday, or legal holiday, the period continues to run until the end of the next day that is not a Saturday, Sunday, or legal holiday.
	day = start_day.add('days',1);
	day = start_day.add('days', period);
	while (day.weekday() == 0 || day.weekday() == 6|| day.holiday() != undefined) {
		day.add('days',1);
	}	
	return day;
}

// test
// console.log(days(moment("2014-04-24"), 7))
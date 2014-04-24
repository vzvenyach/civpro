// rule6.js

var moment = require('moment');
require('./moment-holidays');

function skip_days (m) {
	while (m.weekday() == 0 || m.weekday() == 6|| m.holiday() != undefined) {
		m.add('days',1);
	}
	return m;
}

function hours (start_hour, period) {
	//(A) begin counting immediately on the occurrence of the event that triggers the period;
	//(B) count every hour, including hours during intermediate Saturdays, Sundays, and legal holidays; and
	//(C) if the period would end on a Saturday, Sunday, or legal holiday, the period continues to run until the same time on the next day that is not a Saturday, Sunday, or legal holiday.
	hour = start_hour;
	hour = start_hour.add('hours', period);
	return skip_days(hour)
}

function days (start_day, period) {
 	//(1) Period Stated in Days or a Longer Unit. When the period is stated in days or a longer unit of time:
		//(A) exclude the day of the event that triggers the period;
		//(B) count every day, including intermediate Saturdays, Sundays, and legal holidays; and
		//(C) include the last day of the period, but if the last day is a Saturday, Sunday, or legal holiday, the period continues to run until the end of the next day that is not a Saturday, Sunday, or legal holiday.
	day = start_day.add('days',1);
	day = start_day.add('days', period);
	return skip_days(day);
}

// test
console.log(days(moment("2014-04-25"), 7).toString())
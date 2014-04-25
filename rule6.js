// rule6.js

var moment = require('moment');
require('./moment-holidays');

function skip_days (m) {
	while (m.weekday() == 0 || m.weekday() == 6|| m.holiday() != undefined) {
		m.add('days',1);
	}
	return m;
}

exports.hours = function (start_hour, period, served) {
	hour = start_hour;
	hour = start_hour.add('hours', period);
	if (!is_served(served)) {hour.add('days',3)}
	return skip_days(hour)
}

exports.days = function (start_day, period, served) {
	day = start_day.add('days',1);
	if (!is_served(served)) {day.add('days',3)}
	day = start_day.add('days', period);
	return skip_days(day);
}

function is_served(type) {
	return (type == "personal" || type == "residence") ? true : false;
}
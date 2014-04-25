// rule12.js

var moment = require('moment');
require('./moment-holidays');
var r6 = require('./rule6')

function answer (day, waiver, service) {
	if (waiver) {
		return r6.days(day,60,service)
	}
	else {
		return r6.days(day,21,service)
	}
}

console.log(answer(moment("2014-04-25"),false,""))
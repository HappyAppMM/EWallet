var mongoose = require('mongoose');

var MenuConfig = mongoose.model('menuconfig', {
	_id : Number,
	value : String,
	action : String,
	parentid : Number,
	orderid : Number,
	enabled : Number,
	appversion : Number
});

module.exports = MenuConfig;
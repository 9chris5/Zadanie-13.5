var os = require('os');
var colors = require('colors');
var timer = require('./timer');
function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System:'.red, type);
	console.log('Release:'.blue, release);
	console.log('CPU model:'.green, cpu);
	console.log('Uptime: ~'.bgRed, timer.print(uptime));
	console.log('User name:'.bgBlue, userInfo.username);
	console.log('Home dir:'.bgGreen, userInfo.homedir);
}
exports.print = getOSinfo;

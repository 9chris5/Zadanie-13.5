function rolex(time) {
	var hours, minutes, seconds, total = Math.floor(time);
	hours = Math.floor(total / 3600);
	total %= 3600;
	miutes = Math.floor(total / 60);
	seconds = total % 60;
	return (hours + ' hrs ' + miutes + ' mins ' + seconds + ' secs ');
}
exports.print = rolex;
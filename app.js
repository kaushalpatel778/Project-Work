
function clock() {
		
	const fullDate = new Date();

	var hrs= fullDate.getHours();
	var min= fullDate.getMinutes();
	var sec= fullDate.getSeconds();

	if (hrs < 10){
		hrs =  "0" + hrs;
	}
	 else if (min < 10){
		min = "0" + min;
	}
	else if (sec < 10) {
		sec = "0" + sec;
	}

	document.getElementById('hour').innerHTML= hrs;
	document.getElementById('minute').innerHTML= ":" + min;
	document.getElementById('second').innerHTML=":" + sec;
}
setInterval(clock,100);
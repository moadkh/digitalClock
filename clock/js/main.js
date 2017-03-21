//Exercise: Display a working clock on the screen using the Date() object, and onload() instead of onclick()
function startTime() {
    var currentTime = new Date();
    var h = currentTime.getHours();	
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
 
    //change military time to standard time
    if (h > 12) {
        h -= 12;
    } else if (h === 0) {
       h = 12;
    }

    // add a zero in front of numbers < 10
    function checkTime(i) {
	    if (i < 10) {
	        i = "0" + i;
	    }
	    return i;
	}
    m = checkTime(m);
    s = checkTime(s);

    //display the clock on the screen
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;

    //iterate throught the time, 1 second at a time
    setTimeout(function () {
        startTime()
    }, 1000);
}

var clockStart = document.getElementById('time');
clockStart.onload = startTime;

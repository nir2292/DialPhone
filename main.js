var dialAngle = 0;
var dial = document.getElementById('dial');
var pin = document.getElementById('pin');
var textAr = document.getElementById('textAr');

//document.getElementById('number').value = 'v5';

var dialCenterX = (dial.getBoundingClientRect().left) + (dial.getBoundingClientRect().right - dial.getBoundingClientRect().left)/2;
var dialCenterY = (dial.getBoundingClientRect().top) + (dial.getBoundingClientRect().bottom - dial.getBoundingClientRect().top)/2;


//pin.addEventListener('click', rotateDial);

var coorX = document.getElementById('coorX');
var coorY = document.getElementById('coorY');
coorX.style.visibility = "hidden";
coorY.style.visibility = "hidden";

leftOffset = dial.getBoundingClientRect().left;
topOffset = dial.getBoundingClientRect().top;

var coorX_1 = 187 + leftOffset;
var coorX_2 = 140 + leftOffset;
var coorX_3 = 92 + leftOffset;
var coorX_4 = 56 + leftOffset;
var coorX_5 = 36 + leftOffset;
var coorX_6 = 43 + leftOffset;
var coorX_7 = 71 + leftOffset;
var coorX_8 = 115 + leftOffset;
var coorX_9 = 162 + leftOffset;
var coorX_0 = 201 + leftOffset;
var coorY_1 = 55 + topOffset;
var coorY_2 = 37 + topOffset;
var coorY_3 = 44 + topOffset;
var coorY_4 = 74 + topOffset;
var coorY_5 = 119 + topOffset;
var coorY_6 = 168 + topOffset;
var coorY_7 = 207 + topOffset;
var coorY_8 = 226 + topOffset;
var coorY_9 = 223 + topOffset;
var coorY_0 = 195 + topOffset;

var coorX_End = 227 + leftOffset;
var coorY_End = 139 + topOffset;

var currentButton;

//coorX.setAttribute('value',dialCenterX);
//coorY.setAttribute('value',dialCenterY);

var mdflag;
var moflag;
var angle;
var startAngle;

var rotateDial = function(event) {
	oldAngle = Number(dial.style.transform.substring(7,dial.style.transform.length - 4));
	angle = Math.atan2(event.clientY - dialCenterY, event.clientX - dialCenterX) * 180 / Math.PI;
	var angle2 = angle;
	if (angle < 0) { angle += 360; }
	if (oldAngle < 0) { oldAngle += 360; }
	coorY.setAttribute('value',event.clientY + ',' + dialCenterY + ',' + event.clientX + ',' + dialCenterX + ',' + angle2);
	coorX.setAttribute('value',String(angle) + "," + String(startAngle));
	//coorY.setAttribute('value',event.clientY + ',' + dialCenterY + ',' + event.clientX + ',' + dialCenterX);
	//coorX.setAttribute('value',String(angle) + "," + String(startAngle));
	//coorY.setAttribute('value',oldAngle);
	if (
		//((angle - startAngle) > oldAngle)
		angle > startAngle
		) {
		dial.style.transform = "rotate(" + (angle - startAngle)+ "deg)";
	}
}

function delay(time) {
  var d1 = new Date();
  var d2 = new Date();
  while (d2.valueOf() < d1.valueOf() + time) {
    d2 = new Date();
  }
}

var resetDial = function() {
	var currAngle = Number(dial.style.transform.substring(7,dial.style.transform.length - 4));
	if (currAngle===0) {
		dial.style.transform = "rotate(0deg)";
		return;
	}
	while (currAngle < 0) {
		currAngle += 5;
		if (currAngle > 0) {
			currAngle = 0;
		}
		//somehow delay!
	    dial.style.transform = "rotate(" + currAngle+ "deg)";
	}
	while (currAngle > 0) {
		currAngle -= 5;
		if (currAngle < 0) {
			currAngle = 0;
		}
		//somehow delay!
	    dial.style.transform = "rotate(" + currAngle+ "deg)";
	}
	//dial.style.transform = "rotate(0deg)";
}

var calculateDist = function (x1,x2,y1,y2) {
	return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
}

pin.addEventListener("mousemove", function(event){
	event.preventDefault();
	//coorX.setAttribute('value',event.clientX);
	//coorY.setAttribute('value',event.clientY);
	if (mdflag) {
    	rotateDial(event);
	}
});

pin.addEventListener("mousedown", function(event){
	event.preventDefault();
	mdflag=true;
	moflag=true;
	startAngle = Math.atan2(event.clientY - dialCenterY, event.clientX - dialCenterX) * 180 / Math.PI;
	if (startAngle < 0) { startAngle += 360; }
	if (calculateDist(event.clientX, coorX_1, event.clientY, coorY_1) < 22) {
		currentButton = 1;
	}
	else if (calculateDist(event.clientX, coorX_2, event.clientY, coorY_2) < 22) {
		currentButton = 2;
	}
	else if (calculateDist(event.clientX, coorX_3, event.clientY, coorY_3) < 22) {
		currentButton = 3;
	}
	else if (calculateDist(event.clientX, coorX_4, event.clientY, coorY_4) < 22) {
		currentButton = 4;
	}
	else if (calculateDist(event.clientX, coorX_5, event.clientY, coorY_5) < 22) {
		currentButton = 5;
	}
	else if (calculateDist(event.clientX, coorX_6, event.clientY, coorY_6) < 22) {
		currentButton = 6;
	}
	else if (calculateDist(event.clientX, coorX_7, event.clientY, coorY_7) < 22) {
		currentButton = 7;
	}
	else if (calculateDist(event.clientX, coorX_8, event.clientY, coorY_8) < 22) {
		currentButton = 8;
	}
	else if (calculateDist(event.clientX, coorX_9, event.clientY, coorY_9) < 22) {
		currentButton = 9;
	}
	else if (calculateDist(event.clientX, coorX_0, event.clientY, coorY_0) < 22) {
		currentButton = 0;
	}
	else {
		currentButton = 'E';
	}
	//coorX.setAttribute('value',currentButton);
	rotateDial();
});
pin.addEventListener("mouseup", function(event){
	event.preventDefault();
	mdflag=false;
	if ((calculateDist(event.clientX, coorX_End, event.clientY, coorY_End) < 32) && moflag) {
		//coorY.setAttribute('value',currentButton);
		var numberInput = document.getElementById('number');
		numberInput.value = String(numberInput.value) + String(currentButton);
	}
	resetDial();
});

pin.addEventListener("mouseout", function(event){
	event.preventDefault();
	moflag=false;
	mdflag=false;
	resetDial();
});


//--------------------------

function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type = "mousemove"; break;        
        case "touchend":   type = "mouseup";   break;
        case "touchleave":   type = "mouseout";   break;
        default:           return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //                screenX, screenY, clientX, clientY, ctrlKey, 
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                                  first.screenX, first.screenY, 
                                  first.clientX, first.clientY, false, 
                                  false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}


pin.addEventListener("touchstart", touchHandler, true);
pin.addEventListener("touchmove", touchHandler, true);
pin.addEventListener("touchend", touchHandler, true);
pin.addEventListener("touchcancel", touchHandler, true);    


/**
pin.addEventListener('touchmove', function(event){
	event.preventDefault();
	//coorX.setAttribute('value',event.clientX);
	//coorY.setAttribute('value',event.clientY);
	if (mdflag) {
    	rotateDial(event.targetTouches[0]);
	}
});

pin.addEventListener('touchstart', function(event){
	event.preventDefault();
	event2 = event.targetTouches[0];
	mdflag=true;
	moflag=true;
	startAngle = Math.atan2(event2.clientY - dialCenterY, event2.clientX - dialCenterX) * 180 / Math.PI;
	if (startAngle < 0) { startAngle += 360; }
	if (calculateDist(event2.clientX, coorX_1, event2.clientY, coorY_1) < 22) {
		currentButton = 1;
	}
	else if (calculateDist(event2.clientX, coorX_2, event2.clientY, coorY_2) < 22) {
		currentButton = 2;
	}
	else if (calculateDist(event2.clientX, coorX_3, event2.clientY, coorY_3) < 22) {
		currentButton = 3;
	}
	else if (calculateDist(event2.clientX, coorX_4, event2.clientY, coorY_4) < 22) {
		currentButton = 4;
	}
	else if (calculateDist(event2.clientX, coorX_5, event2.clientY, coorY_5) < 22) {
		currentButton = 5;
	}
	else if (calculateDist(event2.clientX, coorX_6, event2.clientY, coorY_6) < 22) {
		currentButton = 6;
	}
	else if (calculateDist(event2.clientX, coorX_7, event2.clientY, coorY_7) < 22) {
		currentButton = 7;
	}
	else if (calculateDist(event2.clientX, coorX_8, event2.clientY, coorY_8) < 22) {
		currentButton = 8;
	}
	else if (calculateDist(event2.clientX, coorX_9, event2.clientY, coorY_9) < 22) {
		currentButton = 9;
	}
	else if (calculateDist(event2.clientX, coorX_0, event2.clientY, coorY_0) < 22) {
		currentButton = 0;
	}
	else {
		currentButton = 'E';
	}
	//coorX.setAttribute('value',currentButton);
	rotateDial();
});

pin.addEventListener('touchend', function(event){
	event.preventDefault();
	event2 = event.targetTouches[0];
	mdflag=false;
	if ((calculateDist(event2.clientX, coorX_End, event2.clientY, coorY_End) < 32) && moflag) {
		//coorY.setAttribute('value',currentButton);
		var numberInput = document.getElementById('number');
		numberInput.value = String(numberInput.value) + String(currentButton);
	}
	resetDial();
});

pin.addEventListener('touchcancel', function(event){
	event.preventDefault();
	moflag=false;
	mdflag=false;
	resetDial();
});
*/

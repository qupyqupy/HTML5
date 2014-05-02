/**
 * 控制KEYBOARD的類別
 */

const AlREADY_DOWN 	= 1;  
const AlREADY_UP	= 0;
 
var KEY_HANDLER = {} ; 

var KEY_CODE = {
	a 		: "65",
	b 		: "66",
	c 		: "67",
	d 		: "68",
	e 		: "69",
	f 		: "70",
	g 		: "71",
	h 		: "72",
	i 		: "73",
	j 		: "74",
	k 		: "75",
	l 		: "76",
	m 		: "77",
	n 		: "78",
	o 		: "79",
	p 		: "80",
	q 		: "81",
	r 		: "82",
	s 		: "83",
	t 		: "84",
	u 		: "85",
	v 		: "86",
	w 		: "87",
	x 		: "88",
	y 		: "89",
	z 		: "90",
	space 	: "32",
	up 		: "38",
	down	: "40",
	left	: "37",
	right 	: "39"
}

function keyDownHandler(ev)
{
	KEY_HANDLER[String(ev.keyCode)]	= AlREADY_DOWN ; 
}

function keyUpHandler(ev)
{
	KEY_HANDLER[String(ev.keyCode)]	= AlREADY_UP ; 
}


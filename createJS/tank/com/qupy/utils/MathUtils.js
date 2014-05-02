/**
 * 求兩點之間的角度
 * (a物件x, a物件y, b物件x, b物件y)
 */
function tiltAngel(ax, ay, bx, by)
{
	var dx 	= bx - ax ; 
	var dy 	= by - ay ; 
	var dr 	= Math.atan2(dy, dx) ; 
	var r	= dr / Math.PI * 180 ;
	
	return r ; 
}
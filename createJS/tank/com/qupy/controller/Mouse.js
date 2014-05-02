/**
 * 滑鼠指標相關
 */
var stageMouse = {
	x 		: 0 , 
	y 		: 0 , 
	left 	: 0 , 
	top		: 0 ,
	clientX	: 0 , 
	clientY :　0 ,
	update 	: function(cv, e)
	{
		var rect 		= cv.getBoundingClientRect();		
		this.x			= e.clientX - rect.left ;
 		this.y			= e.clientY - rect.top ; 
		this.left		= rect.left ; 
		this.top		= rect.top ; 
		this.clientX	= e.clientX ; 
		this.clientY	= e.clientY ;
	}
}
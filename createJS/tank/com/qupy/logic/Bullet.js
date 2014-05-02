var Bullet = function (obj, tankobj)
{
	const SPEED		= 20 ;  
	
	var _this 		= new createjs.Bitmap(obj);
	var _moveX		= 0 ;
	var _moveY		= 0 ; 
	
	initialize();
	
	function initialize()
	{
		var m = tankobj.rotation - 90 ; 
	
		if (m < 0)
		{
			m = m % 360 ;
			m = 360 + m ;
		}
		else
		{
			m = m % 360 ; 	
		}
		
		_this.regX		= obj.width / 2 ; 
		_this.regY		= obj.height / 2 ; 
		_this.rotation	= tankobj.rotation ; 
		_moveX			= SPEED * Math.cos(m * Math.PI / 180);
		_moveY			= SPEED * Math.sin(m * Math.PI / 180);
		_this.x			= tankobj.x + (_moveX * 2) ; 
		_this.y			= tankobj.y + (_moveY * 2) ; 
	}
		
	this.tick = function()
	{
		_this.x += _moveX ; 	
		_this.y += _moveY ;
	}
	
	this.getInstance = function()
	{
		return _this ; 
	}
}


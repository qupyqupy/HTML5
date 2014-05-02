var Tank = function (obj, rangX, rangY)
{
	const SPEED		= 5 ;  
	
	var _this 		= new createjs.Bitmap(obj);
	
	var _minX, _maxX, _minY, _maxY;
	
	initialize();
	
	function initialize()
	{
		_this.regX 		= obj.width / 2 ; 
		_this.regY 		= obj.height / 2 ;	
		
		_this.scaleX	= 0.5 ; 
		_this.scaleY	= 0.5 ;
		
		_minX			= 0 + (_this.image.width * _this.scaleX / 2 );
		_maxX			= rangX - (_this.image.width * _this.scaleX / 2 );
		_minY			= 0 + (_this.image.height * _this.scaleY / 2 );
		_maxY			= rangY - (_this.image.height * _this.scaleY / 2 );
	}
	
	this.tick = function()
	{
		if (KEY_HANDLER[KEY_CODE.left] == AlREADY_DOWN)
		{
			_this.x = _this.x - SPEED ;
		}
	
		if (KEY_HANDLER[KEY_CODE.right] == AlREADY_DOWN)
		{
			_this.x = _this.x + SPEED ;
		}
	
		if (KEY_HANDLER[KEY_CODE.up] == AlREADY_DOWN)
		{
			_this.y = _this.y - SPEED ;
		}
	
		if (KEY_HANDLER[KEY_CODE.down] == AlREADY_DOWN)
		{
			_this.y = _this.y + SPEED ;
		}
		
		if (_this.x < _minX)
		{
			_this.x = _minX ; 	
		}
		
		if (_this.x > _maxX)
		{
			_this.x = _maxX ; 	
		}
		
		if (_this.y < _minY)
		{
			_this.y = _minY ; 	
		}
		
		if (_this.y > _maxY)
		{
			_this.y = _maxY ; 	
		}
	}
	
	this.getInstance = function()
	{
		return _this ; 
	}
}


var monsterArray = new Array(); 

var Monster = function ()
{
	const SPEED		= 20 ;  
	
	var _this ;
	var _moveX		= 0 ;
	var _moveY		= 0 ; 
	
	this.initialize = function(img)
	{
		var localSpriteSheet = new createjs.SpriteSheet({
            images: [img], //要用到的图片
            frames: { width:58.75, height:35, regX:29.375, regY: 17.5 },
            animations: {
                start: [0, 3, "start", 4]
            }
        });
		
		_this = new createjs.BitmapAnimation(localSpriteSheet);
		_this.gotoAndPlay("start");    
	}
	
	this.getInstance = function()
	{
		return _this ; 
	}
	
	this.tick = function()
	{
		_this.x += (dTank.getInstance().x - _this.x) / 50 ; 
		_this.y += (dTank.getInstance().y - _this.y) / 50 ; 
	}
}

function bornMonster()
{
	if (Math.floor(Math.random() * 30) == 15)
	{
		var temp = new Monster();
		temp.initialize(sourceManger.Monster["kiss"]);
	
		temp.getInstance().x = Math.random() * Center.STAGE_WIDTH ; 
		temp.getInstance().y = Math.random() * Center.STAGE_HEIGHT ; 
	
		stage.addChild(temp.getInstance());
		monsterArray.push(temp);
	}
}

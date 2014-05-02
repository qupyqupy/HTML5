var life 	= 20 ; 
var score	= 0 ; 

var ValuePanel = function()
{
	var _this	= new createjs.Text();
	
	function initialize() 
	{
       	_this.font	= "bold 30px Arial";
    }
	
	this.tick = function()
	{
		_this.text = "生命：" + life + ", 分數=" + score ;
	}	
	
	this.lifeChange = function(val)
	{
		life += val ;
		
		if (life < 0)
		{
			life = 0 ; 	
		}
	}
	
	this.socreChange = function(val)
	{
		score += val ;
		
		if (score < 0)
		{
			score = 0 ; 	
		}
	}
	
	this.getInstance = function()
	{
		return _this ; 	
	}
}
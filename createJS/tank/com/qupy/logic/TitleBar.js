(function (window) 
{
    function TitleBar() 
	{
        this.initialize();
    }
    TitleBar.prototype = new createjs.Text();
 
    TitleBar.prototype.initialize = function () 
	{
       	this.font	= "bold 40px Arial";
		this.text 	= "Qupy大冒險";
		this.x		= Center.STAGE_WIDTH / 2 - 110; 
		this.y		= 20 ;
    }
    window.TitleBar = TitleBar;
} (window));



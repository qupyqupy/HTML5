/**
 * 控制素材載入的類別
 */
function SourceManger() 
{
	var NUM_OF_TASKS 		= 4;
	var numOfTasksComplete	= 0 ;
  	
	var onDownLoadComplete;
    
   	this.setDownLoadCompleteFun = function (fun) 
	{		
        onDownLoadComplete = fun;
    }
 	
	this.tank 			= new Image();
    this.bullet 		= new Image(); 
	this.Monster		= new Array();
 	
	this.startDownLoad = function () 
	{
		downLoad(this.tank, "source/images/tank.png", handleImageLoad, handleImageError);
        downLoad(this.bullet, "source/images/bullet.png", handleImageLoad, handleImageError); 
		
		this.Monster["kiss"] = new Image(); 
		downLoad(this.Monster["kiss"], "source/images/kiss.png", handleImageLoad, handleImageError);
		
		this.Monster["anbee"] = new Image(); 
		downLoad(this.Monster["anbee"], "source/images/anbee.png", handleImageLoad, handleImageError);
    }
 
    function downLoad(imgElement, url, loadedHandler, errorHandler) 
	{
       	imgElement.src 		= url;
        imgElement.onload 	= loadedHandler;
        imgElement.onerror 	= errorHandler;
    }
 
    function handleImageLoad(e) 
	{
        numOfTasksComplete++
 		   
        if (numOfTasksComplete == NUM_OF_TASKS) 
		{
			numOfTasksComplete = 0;
            onDownLoadComplete();
        }
    }
 	
	function handleImageError(e) 
	{
		console.log("Error Loading Image : " + e.target.src);
    }
}
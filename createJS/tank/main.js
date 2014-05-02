var i, j; 
var canvas, stage ;
var sourceManger ; 
var dTitleBar, dTank, dValuePanel;
var bulletArr = [] ; 

function init()
{	
	canvas 			= document.getElementById("demo_canvas");
	stage			= new createjs.Stage(canvas);	
	sourceManger	= new SourceManger();
	sourceManger.setDownLoadCompleteFun(startGame);
	
	sourceManger.startDownLoad();
}

function startGame()
{
	initUI();
	initClass();
}

function initUI()
{
	dTitleBar					= new TitleBar(); 
	dTank						= new Tank(sourceManger.tank, Center.STAGE_WIDTH, Center.STAGE_HEIGHT); 	
	dTank.getInstance().x		= Center.STAGE_WIDTH / 2 ; 
	dTank.getInstance().y		= Center.STAGE_HEIGHT / 2 + 50; 
	
	dValuePanel					= new ValuePanel();
	dValuePanel.getInstance().x	= 30 ; 
	dValuePanel.getInstance().y	= 20 ;
		
	stage.addChild(dTitleBar);
	stage.addChild(dValuePanel.getInstance());
	stage.addChild(dTank.getInstance());
	
}

function initClass()
{
	this.document.onkeydown = keyDownHandler ; 
	this.document.onkeyup	= keyUpHandler; 
	createjs.Ticker.useRAF 	= true;
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tickHandler);
	canvas.addEventListener("mousemove", mouseMoveHandler);
	canvas.addEventListener("click", clickHandler);
}

function clickHandler(ev)
{
	shot();
}

function mouseMoveHandler(ev)
{
	stageMouse.update(canvas, ev);	
}

function shot()
{
	var tempBullet = new Bullet(sourceManger.bullet, dTank.getInstance());	
	
	bulletArr.push(tempBullet);
	stage.addChild(tempBullet.getInstance());
}

function tickHandler(ev)
{
	dTank.tick();
	
	bornMonster();
	
	if (KEY_HANDLER[KEY_CODE.space] == AlREADY_DOWN)
	{
		shot();
	}	
	
	for (i = 0 ; i < monsterArray.length ; i++)
	{
		monsterArray[i].tick();
		if (hitHandler(dTank.getInstance(), monsterArray[i].getInstance(), 20, 20))
		{
			dValuePanel.lifeChange(-1);
			stage.removeChild(monsterArray[i].getInstance());
			monsterArray.splice(i, 1);
		}
	}
	
	for (i = 0 ; i < bulletArr.length ; i++)
	{
		bulletArr[i].tick();
		
		if (bulletArr[i].getInstance().x < 0 || 
			bulletArr[i].getInstance().y < 0 || 
			bulletArr[i].getInstance().x > Center.STAGE_WIDTH * 2 || 
			bulletArr[i].getInstance().x > Center.STAGE_HEIGHT * 2 )
		{
			stage.removeChild(bulletArr[i].getInstance());	
			bulletArr.splice(i, 1);
		}
		else
		{		
			for (j = 0 ; j < monsterArray.length ;j++)
			{
				if (hitHandler(bulletArr[i].getInstance(), monsterArray[j].getInstance(), 10, 10))
				{
					dValuePanel.socreChange(1);
					stage.removeChild(bulletArr[i].getInstance());	
					stage.removeChild(monsterArray[j].getInstance());
					bulletArr.splice(i, 1);
					monsterArray.splice(j, 1);				
					break;	
				}
			}
		}
	}
	
	dValuePanel.tick();
	
	dTank.getInstance().rotation 	= tiltAngel(dTank.getInstance().x, dTank.getInstance().y, stageMouse.x, stageMouse.y) + 90 ;
	
	if (life == 0)
	{
		createjs.Ticker.removeEventListener("tick", tickHandler);
	}	
	
	stage.update();
}
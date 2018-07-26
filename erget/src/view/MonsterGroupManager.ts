namespace view {
	export class MonsterGroupManager extends base.ViewManager {
		static instance : view.MonsterGroupManager;
		public greenMosters : Array<view.GreenMonster> = [];
		private dragon : view.Dragon;
		private demon : view.Demon;
		
		constructor() {
			super();
			MonsterGroupManager.instance = this;
		}

		onTouch(data:egret.TouchEvent):void {
			this.demon.tx = data.localX;
			this.demon.ty = data.localY;

			this.dragon.tx = data.localX;
			this.dragon.ty = data.localY;
		}

		protected init():void {
			this.dragon = new view.Dragon();
			this.demon = new view.Demon();

			this.dragon.scaleX = 0.2;
			this.dragon.scaleY = this.dragon.scaleX;
			this.demon.scaleX = 0.3;
			this.demon.scaleY = this.demon.scaleX;

			this.addChild(this.dragon);
			this.addChild(this.demon);
			
			this.dragon.play(view.Dragon.ACTION_WALK);
			this.demon.play(view.Demon.ACTION_RUN);

			this.setListener();
			this.reSize();		
		}

		protected setListener():void {
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}

		private reSize():void {
			this.dragon.x = 540;
			this.dragon.y = 470;

			this.demon.x = 50;
			this.demon.y = 150;			
		}		

		private onEnterFrame(evt:egret.Event):void {
			const num : number = Math.floor(Math.random() * 1000) % 20;

			if (num === 0) {
				const mo : view.GreenMonster = new view.GreenMonster();
				this.addChild(mo);
				mo.gotoAndPlay('run', -1);
				this.greenMosters.push(mo);

				mo.scaleX = 0.1;
				mo.scaleY = mo.scaleX;

				mo.x = Math.random() * this.stage.stageWidth;
				mo.y = Math.random() * this.stage.stageHeight;
			}
		}

		getInstance():view.MonsterGroupManager {
			return MonsterGroupManager.instance;
		}
	}
}
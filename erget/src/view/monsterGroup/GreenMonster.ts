namespace view {
	export class GreenMonster extends egret.MovieClip {
		private _tx : number = 0;
		private _ty : number = 0;
		public constructor() {
			super(res.mcFactory.generateMovieClipData('mo'));

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeListener, this);
		}

		init():void {
			this._tx = Math.random() * this.stage.stageWidth * 2 - this.stage.stageWidth;
			this._ty = Math.random() * this.stage.stageHeight * 2 - this.stage.stageHeight;
			this.anchorOffsetX = this.width / 2;
			this.anchorOffsetY = this.height / 2;
			this.gotoAndPlay('run', -1);
			this.setListener();
		}

		setListener():void {
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}

		removeListener(evt:egret.Event):void {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeListener, this);
		}

		onEnterFrame(evt:egret.Event):void {
			this.x += (this._tx - this.x) / 500;
			this.y += (this._ty - this.y) / 500;
		}

		set tx(val:number) {
			this._tx = val;
		}
		
		set ty(val:number) {
			this._ty = val;
		}
	}
}
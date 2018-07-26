namespace view {
	export class ShipManager extends base.ViewManager {
		static instance : view.ShipManager;
		private model : egret.Bitmap;
		private _tx : number = 0;
		private _ty : number = 0;

		constructor() {
			super();
			ShipManager.instance = this;
		}

		onTouch(data:egret.TouchEvent):void {
			this._tx = data.localX;
			this._ty = data.localY;
		}

		protected init():void {
			this.model = new egret.Bitmap(RES.getRes('Ship'));
			this.model.width = 100;
			this.model.height = 100;

			this.addChild(this.model);

			this.anchorOffsetX = this.width / 2;
			this.anchorOffsetY = this.height / 2;

			this.reSize();
			this.setListener();
		}

		protected setListener():void {
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}

		private reSize():void {
			this.x = this.stage.stageWidth / 2;
			this.y = this.stage.stageHeight / 2;
		}

		private onEnterFrame(evt:egret.Event):void {
			const angel : number = Utils.getAngle({x: this._tx, y: this._ty}, this);
			this.rotation = angel - 90;
		}

		getInstance():view.ShipManager {
			return ShipManager.instance;
		}
	}
}
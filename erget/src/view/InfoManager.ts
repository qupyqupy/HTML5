namespace view {
	export class InfoManager extends base.ViewManager {
		private title : egret.TextField;

		public constructor() {
			super();
		}

		protected init():void {
			this.title = new egret.TextField();

			this.title.touchEnabled = true;        
			this.title.text = 'Egret DEMO';
			this.title.size = 32;
			this.addChild(this.title);

			this.setListener();
			this.reSize();
		}

		protected setListener():void {
			this.title.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTitleTouch, this);
		}

		protected reSize():void {
			this.title.x = (this.stage.width - this.title.width) / 2;
		}

		private onTitleTouch(evt:egret.TouchEvent):void {
			this.title.textColor = 0x123477;
		}
	}
}
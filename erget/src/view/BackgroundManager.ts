namespace view {
	export class BackgroundManager extends base.ViewManager {
		private bg : egret.Shape = new egret.Shape();
		
		protected init():void {
			this.bg.graphics.beginFill(362159);
			this.bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
			this.bg.graphics.endFill();
			this.addChild(this.bg);
		}
	}
}
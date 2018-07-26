namespace base {
	export class ViewManager extends egret.Sprite {
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
		}

		protected init():void {
		}

		protected setListener():void {
		}
	}
}
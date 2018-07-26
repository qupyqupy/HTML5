namespace view {
	export class BulletManager extends base.ViewManager {
		private bulletSpeed : number = 20;

		onTouch(data:egret.TouchEvent):void {
			const bullet : view.Bullet = new Bullet();
			this.addChild(bullet);

			const angel : number = Utils.getAngle({x: data.localX, y: data.localY}, view.ShipManager.instance) + 180;
			bullet.rotation = angel + 90;
			bullet.moveX = this.bulletSpeed * Math.cos(angel * Math.PI / 180);
			bullet.moveY = this.bulletSpeed * Math.sin(angel * Math.PI / 180);
			bullet.x = ShipManager.instance.x + bullet.moveX;
			bullet.y = ShipManager.instance.y + bullet.moveY;
		}
	}

	export class Bullet extends egret.Sprite {
		private model : egret.Bitmap;
		private _moveX : number = 0;
		private _moveY : number = 0;

		constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeListener, this);
		}

		checkCollision() {
			const mArray : Array<GreenMonster> = MonsterGroupManager.instance.greenMosters;
			const mLen : number = mArray.length;

			for (let i = 0; i < mLen; i++) {
				const tmpM : GreenMonster = mArray[i];
				if (tmpM.hitTestPoint(this.x, this.y, false)) {
					this.parent.removeChild(this);
					tmpM.parent.removeChild(tmpM);
					mArray.splice(i, 1);
					break;
				}
			}
		}

		private init() {
			this.model = new egret.Bitmap(RES.getRes('bullet'));
			this.addChild(this.model);

			this.anchorOffsetX = this.width / 2;
			this.anchorOffsetY = this.height / 2;

			this.setListener();
		}

		private removeListener(evt:egret.Event) {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
			this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeListener, this);
		}

		private setListener():void {
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}

		private onEnterFrame(evt:egret.Event):void {
			this.x += this.moveX;
			this.y += this.moveY;

			if (this.x > this.stage.stageWidth 
			   || this.x < 0
			   || this.y > this.stage.stageHeight
			   || this.y < 0) {
				   this.parent.removeChild(this);				   
			} else {
				this.checkCollision();
			}			   
		}

		set moveX(val:number) {
			this._moveX = val;
		}

		set moveY(val:number) {
			this._moveY = val;
		}

		get moveX():number {
			return this._moveX;
		}

		get moveY():number {
			return this._moveY;
		}
	}
}


// private checkCollision() {
// 			let hasHit : boolean = false;
// 			const bLen : number = this.bullets.length;
// 			const mLen : number = MonsterGroupManager.instance.greenMosters.length;
			
// 			for (let i : number = 0; i < bLen; i++) {
// 				for (let j : number = 0; j < mLen; j++) {
// 					const a : Bullet = this.bullets[i];
// 					const b : GreenMonster = MonsterGroupManager.instance.greenMosters[j];
					
// 					if (a.hitTestPoint(b.x, b.y, true)) {
// 						hasHit = true;
// 						this.bullets.splice(i, 1);
// 						MonsterGroupManager.instance.greenMosters.splice(j, 1);
// 						a.parent.removeChild(a);
// 						b.parent.removeChild(b);
// 						break;
// 					}
// 				}
// 			}
// 			if (hasHit) {
// 				this.checkCollision();
// 			}
// 		}
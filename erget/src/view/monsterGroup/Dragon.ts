namespace view {
	export class Dragon extends egret.Sprite {
		static ACTION_FALL : string = 'fall';
		static ACTION_JUMP : string = 'jump';
		static ACTION_STAND : string = 'stand';
		static ACTION_WALK : string = 'walk';
		
		private model : dragonBones.EgretArmatureDisplay;
		private head : dragonBones.Bone;

		private _tx : number = 0;
		private _ty : number = 0 ;

		constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
		}

		play(action:string):void {
			this.model.animation.play(action);
		}

		private init():void {
			this.model = res.dbFactory.buildArmatureDisplay('Dragon');
			this.addChild(this.model);

			this.head = this.model.armature.getBone('head');

			this.setListener();
		}

		private setListener():void {
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}

		private onEnterFrame(evt:egret.Event):void {
			const angel : number = Utils.getAngle({x: this._tx, y: this._ty}, this);
			this.head.offset.rotation = (angel) / 180 * Math.PI;
		}

		set tx(val:number) {
			this._tx = val;
		}

		set ty(val:number) {
			this._ty = val;
		}
	}
}
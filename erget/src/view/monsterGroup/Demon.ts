namespace view {
	export class Demon extends egret.Sprite {
		static ACTION_DEAD : string = 'dead';
		static ACTION_FREEZE : string = 'freeze';
		static ACTION_HIT : string = 'hit';
		static ACTION_NORMAL_ATTACK : string = 'normalAttack';
		static ACTION_RUN : string = 'run';
		static ACTION_SKILLATTACK : string = 'skillAttack1';
		static ACTION_STEADY : string = 'steady';
		static ACTION_STUN : string = 'stun';
		static ACTION_UNIQUE_ATTACK : string = 'uniqueAttack';
		static ACTION_WIN : string = 'win';

		private model : dragonBones.EgretArmatureDisplay;
		private head : dragonBones.Bone;

		private _tx : number = 0;
		private _ty : number = 0;

		public constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
		}

		init():void {
			this.model = res.dbFactory.buildArmatureDisplay('armatureName');
			this.addChild(this.model);

			this.head = this.model.armature.getBone('head');

			this.setListener();
		}

		setListener():void {
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		}

		onEnterFrame(evt:egret.Event):void {
			const radian : number = Utils.getRadian({x: this._tx, y: this._ty}, this.model);
			this.head.offset.rotation = radian - 0.8;
		}

		play(action:string):void {
			this.model.animation.play(action);
		}

		set tx(val:number) {
			this._tx = val;
		}

		set ty(val:number) {
			this._ty = val;
		}
	}
}
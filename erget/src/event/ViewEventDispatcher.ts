namespace GameEvent {
	export class EventDispatcher extends egret.EventDispatcher {
		static instance : GameEvent.EventDispatcher;

		public constructor() {
			super();
		}

		static getInstance():GameEvent.EventDispatcher {
			if (this.instance === undefined) {
			    this.instance = new GameEvent.EventDispatcher();
			}
			return this.instance;
		}
	}
}
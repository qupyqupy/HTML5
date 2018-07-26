class Main extends egret.DisplayObjectContainer {
    private backgroundM : view.BackgroundManager;
    private infoM : view.InfoManager;
    private monsterGroupM : view.MonsterGroupManager;
    private shipM : view.ShipManager;
    private bulletM : view.BulletManager;

    private gs : protocol.GameSocket = new protocol.GameSocket();
    private res : res.assets;

    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.loadResource, this);
    }

    private loadResource(event: egret.Event) {
        this.res = new res.assets();
        this.res.addEventListener(res.Event.ON_COMPLETE, this.createGameScenece, this);
    }

    private createGameScenece() {
        egret.lifecycle.addLifecycleListener((context) => {
            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.init().catch(e => {
            console.log(e);
        })
    }

    private async init() {
        this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;

        this.backgroundM = new view.BackgroundManager(),
        this.infoM = new view.InfoManager(),
        this.monsterGroupM = new view.MonsterGroupManager(),
        this.shipM = new view.ShipManager(),
        this.bulletM = new view.BulletManager();
       
        super.addChild(this.backgroundM);
        super.addChild(this.infoM);
        super.addChild(this.monsterGroupM);
        super.addChild(this.shipM);
        super.addChild(this.bulletM);

        const req : egret.URLRequest = new egret.URLRequest('http://httpbin.org/user-agent');
        const loader : egret.URLLoader = new egret.URLLoader();

        loader.addEventListener(egret.Event.COMPLETE, function(evt:egret.Event):void {
            console.log(evt.target.data);
        }, this);

        loader.load(req);
        this.gs.connect('echo.websocket.org', 80);

        // let stats = armature.animation.fadeIn("jump", 0.2, 0, 0, "NORMAL_ANIMATION_GROUP");
        // stats.addBoneMask('hand');
        // armature.animation.fadeIn("walk", 0.1, 1, 0, "ATTACK_ANIMATION_GROUP");

        this.setListener();
    }

    setListener():void {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
    }

    private onTouch(evt:egret.TouchEvent):void {
        this.bulletM.onTouch(evt);
        this.monsterGroupM.onTouch(evt);
        this.shipM.onTouch(evt);
    }
}


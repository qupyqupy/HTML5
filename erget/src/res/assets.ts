namespace res {
    export class Event extends egret.Event {
      static ON_COMPLETE = 'oncomplete';
    }

    export class assets {
      private eventDispatcher : egret.EventDispatcher = new egret.EventDispatcher();
      constructor() {
        this.loadConfig();
      }

      private loadConfig():void {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onComplete, this); 
        RES.addEventListener(RES.ResourceEvent.CONFIG_LOAD_ERROR, this.onError, this);
        RES.loadConfig('resource/default.res.json', 'resource/'); 
      }

      private onComplete(evt:any):void {
        switch(evt.type) {
          case RES.ResourceEvent.CONFIG_COMPLETE:
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onProgress, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onError, this);
            RES.loadGroup('play');
            break;
          case RES.ResourceEvent.GROUP_COMPLETE:
            const event : res.Event = new res.Event(res.Event.ON_COMPLETE);
            res.dbFactory.init();
            res.mcFactory.init();
            this.eventDispatcher.dispatchEvent(event);
            break;
        }
      }

      private onProgress(evt:any):void {

      }

      private onError(evt:any):void {

      }

      public addEventListener(type:string, listener:Function, thisObject:any) {
        this.eventDispatcher.addEventListener(type, listener, thisObject);
      }
   }

   export class DBFactory {
     private factory : dragonBones.EgretFactory = new dragonBones.EgretFactory();
     
     init():void {
       this.factory.parseDragonBonesData(RES.getRes('dragon_skin'));
       this.factory.parseTextureAtlasData(RES.getRes('dragon_texture'), RES.getRes('dragon_png'));
       this.factory.parseDragonBonesData(RES.getRes('demon_skin'));
       this.factory.parseTextureAtlasData(RES.getRes('demon_texture'), RES.getRes('demon_png'));
     }

     buildArmatureDisplay(str:string):dragonBones.EgretArmatureDisplay {
       return this.factory.buildArmatureDisplay(str);
     }
   }

   export class McFactory extends egret.MovieClipDataFactory {
     private factory : egret.MovieClipDataFactory;
     
     init():void {
       this.factory = new egret.MovieClipDataFactory(RES.getRes('badman'), RES.getRes('badmanJson'));
     }

     generateMovieClipData(str:string):egret.MovieClipData {
       return this.factory.generateMovieClipData(str);
     }
   }

   export const dbFactory : res.DBFactory = new res.DBFactory();
   export const mcFactory : res.McFactory = new res.McFactory();
}
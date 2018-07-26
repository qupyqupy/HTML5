namespace protocol {    
    export class GameSocket {        
        private ws : egret.WebSocket = new egret.WebSocket();
        private ww : protocol.Parser;

        public constructor() {
          this.setListener();
        }

        public connect(url:string, port:number):void {
          this.ws.connect(url, port);
        }

        private setListener():void {
          this.ws.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this);
          this.ws.addEventListener(egret.Event.CONNECT, this.onConnect, this);
        }

        private onData(e:egret.Event):void {
          const msg = this.ws.readUTF();
          console.log(msg);
        }

        private onConnect():void {
          let cmd = "Hello1111 Egret WebSocket";    
          this.ws.writeUTF(cmd); 
        }
    }
}
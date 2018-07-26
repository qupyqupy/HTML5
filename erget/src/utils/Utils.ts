class Utils {
    static getAngle(a:any, b:any):number {
        const dx : number = b.x - a.x;
        const dy : number = b.y - a.y;
        const dr : number = Math.atan2(dy, dx);
        const result : number = dr / Math.PI * 180;

        return result;
    }

    static getRadian(a:any, b:any):number {
        let result : number = Utils.getAngle(a, b);
        result = result * Math.PI / 180;

        return result;
    }
}


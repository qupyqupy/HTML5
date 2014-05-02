/**
 * 碰撞偵測(物件A, 物件B, 物件A的範圍, 物件B的範圍)
 **/
function hitHandler(obja, objb, hita, hitb)
{
	if (obja.x - hita > objb.x + hitb) { return; }
    if (obja.x + hita < objb.x - hitb) { return; }
    if (obja.y - hita > objb.y + hitb) { return; }
    if (obja.y + hita < objb.y - hitb) { return; }
 	 
	var isHit = hitb + hita > Math.sqrt(Math.pow(Math.abs(objb.x - obja.x), 2) + Math.pow(Math.abs(objb.y - obja.y), 2));
    return isHit ; 
}
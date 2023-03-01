import BirdControl from "./playercontrol";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {
    @property(Number)
    speed:number = 4
    @property(Number)
    width:number = 287
    @property(BirdControl)
    bird:BirdControl = null
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // for(let bg of this.node.children){
        //     bg.on(cc.Node.EventType.TOUCH_START,()=>{
        //         if(!this.bird.isDead){
        //             this.bird.fly()
        //         }
        //     })
        // }
    }

    update (dt) {
        for(let bg of this.node.children){
            bg.x -= this.speed * dt
            if(bg.x < -this.width){
                bg.x += this.width * 2
            }
        }
    }
}

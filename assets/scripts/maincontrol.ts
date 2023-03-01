import BirdControl from "./playercontrol";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainControl extends cc.Component {

    @property(BirdControl)
    bird:BirdControl = null

    @property(cc.Label)
    scorelabel:cc.Label = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        window['global'] = {
            score:0
        }
        this.node.on(cc.Node.EventType.TOUCH_START,()=>{
            if(!window['global'].isDead){
                this.bird.fly()
            }
        })
        this.schedule(()=>{
            window['global'].score += 1
            this.scorelabel.getComponent(cc.Label).string = window['global'].score.toString()
        },1)
    }

    // update (dt) {}
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletControl extends cc.Component {
    @property(Number)
    speed:number = 1000

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.node.x -= this.speed * dt
        this.node.y += this.speed * dt
        if(this.node.x < -50){
            this.node.destroy()
        }
    }
}

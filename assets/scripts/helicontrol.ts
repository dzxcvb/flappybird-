const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(Number)
    speed:number = 100
    fire = true

    rand(m,n){
        return Math.ceil(Math.random()*(n-m+1)+m-1)
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.node.x -= this.speed * dt
        if(this.node.x < -50){
            this.node.destroy()
        }
    }
}
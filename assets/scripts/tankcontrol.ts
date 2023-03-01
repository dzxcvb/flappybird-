import BulletControl from "./bulletcontrol";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TankControl extends cc.Component {
    @property(Number)
    speed:number = 500
    @property(cc.Prefab)
    bullet:cc.Prefab = null

    fire = true

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    rand(m,n){
        return Math.ceil(Math.random()*(n-m+1)+m-1)
    }

    update (dt) {
        this.node.x -= this.speed * dt
        if(this.node.x < -50){
            this.node.destroy()
        }
        if(this.fire && (this.node.x <= this.rand(144,288))){
            setTimeout(() => {
                let bullet = cc.instantiate(this.bullet)
                bullet.setParent(cc.director.getScene())
                bullet.x = this.node.x - 15
                bullet.y = this.node.y + 10
                cc.loader.loadRes('fire',cc.AudioClip,(err,clip)=>{
                    cc.audioEngine.playEffect(clip,false)
                })
                this.fire = false
            }, 1);
        }
    }
}

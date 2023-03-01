const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {
    @property(Number)
    speed:number = 100

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true
    }

    start () {
        window['global'].isDead = false
    }

    fly(){
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,this.speed)
        cc.loader.loadRes('fly',cc.AudioClip,(err,clip)=>{
            cc.audioEngine.playEffect(clip,false)
        })
    }

    onBeginContact(contact,self,other){
        if(other.tag == 5){
            cc.director.loadScene('over')
        }else if(other.tag != 1){
            window['global'].isDead = true
            this.node.getComponent(cc.RigidBody).angularVelocity = 180
            this.node.getComponent(cc.Animation).stop()
            cc.loader.loadRes('die',cc.AudioClip,(err,clip)=>{
                cc.audioEngine.playEffect(clip,false)
            })
        }
    }

    update (dt) {
        if(this.node.x <= -18){
            cc.director.loadScene('over')
        }
    }
}

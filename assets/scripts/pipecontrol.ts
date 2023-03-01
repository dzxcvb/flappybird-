const {ccclass, property} = cc._decorator;

@ccclass
export default class PipeControl extends cc.Component {

    @property(Number)
    speed:number = 200
    @property(Number)
    width:number = 288
    @property(cc.Prefab)
    tank:cc.Prefab = null
    @property(cc.Prefab)
    heli:cc.Prefab = null


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    rand(m,n){
        return Math.ceil(Math.random()*(n-m+1)+m-1)
    }
    start () {
        if(!window['global'].isDead){
        this.schedule(()=>{
            let tank = cc.instantiate(this.tank)
                tank.setParent(cc.director.getScene())
                tank.x = 288 + Math.random() * 144
                tank.y = 65
        },2)

        this.schedule(()=>{
            let heli = cc.instantiate(this.heli)
            heli.setParent(cc.director.getScene())
            heli.x = 288 + Math.random() * 144
            heli.y = 256 + Math.random() * 240
        },this.rand(3,5))
        }
    }

    update (dt) {
        for(let pipe of this.node.children){
            pipe.x -= this.speed * dt
            if(pipe.x <= -50){
                pipe.x = this.width * 2
                pipe.y = Math.random() * 150 + 450
            }
        }
    }
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.children[2].getComponent(cc.Label).string = '你一共飞行了'+ window['global'].score+'秒'
        if(window['global'].score > 30){
            this.node.children[3].getComponent(cc.Label).string = '大神，请受我一拜'
        }else{
            this.node.children[3].getComponent(cc.Label).string = '请再接再厉'
        }

        this.node.on(cc.Node.EventType.TOUCH_START,()=>{
            cc.director.loadScene('game')
        })
    }

    // update (dt) {}
}

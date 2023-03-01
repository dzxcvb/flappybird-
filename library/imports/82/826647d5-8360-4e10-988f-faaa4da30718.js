"use strict";
cc._RF.push(module, '82664fVg2BOEJiP+qpNowcY', 'playercontrol');
// scripts/playercontrol.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BirdControl = /** @class */ (function (_super) {
    __extends(BirdControl, _super);
    function BirdControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 100;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    BirdControl.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
    };
    BirdControl.prototype.start = function () {
        window['global'].isDead = false;
    };
    BirdControl.prototype.fly = function () {
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, this.speed);
        cc.loader.loadRes('fly', cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, false);
        });
    };
    BirdControl.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 5) {
            cc.director.loadScene('over');
        }
        else if (other.tag != 1) {
            window['global'].isDead = true;
            this.node.getComponent(cc.RigidBody).angularVelocity = 180;
            this.node.getComponent(cc.Animation).stop();
            cc.loader.loadRes('die', cc.AudioClip, function (err, clip) {
                cc.audioEngine.playEffect(clip, false);
            });
        }
    };
    BirdControl.prototype.update = function (dt) {
        if (this.node.x <= -18) {
            cc.director.loadScene('over');
        }
    };
    __decorate([
        property(Number)
    ], BirdControl.prototype, "speed", void 0);
    BirdControl = __decorate([
        ccclass
    ], BirdControl);
    return BirdControl;
}(cc.Component));
exports.default = BirdControl;

cc._RF.pop();
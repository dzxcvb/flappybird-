"use strict";
cc._RF.push(module, '1bbb3Fqd3FL3JGNebQ6ONqV', 'tankcontrol');
// scripts/tankcontrol.ts

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
var TankControl = /** @class */ (function (_super) {
    __extends(TankControl, _super);
    function TankControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 500;
        _this.bullet = null;
        _this.fire = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TankControl.prototype.start = function () {
    };
    TankControl.prototype.rand = function (m, n) {
        return Math.ceil(Math.random() * (n - m + 1) + m - 1);
    };
    TankControl.prototype.update = function (dt) {
        var _this = this;
        this.node.x -= this.speed * dt;
        if (this.node.x < -50) {
            this.node.destroy();
        }
        if (this.fire && (this.node.x <= this.rand(144, 288))) {
            setTimeout(function () {
                var bullet = cc.instantiate(_this.bullet);
                bullet.setParent(cc.director.getScene());
                bullet.x = _this.node.x - 15;
                bullet.y = _this.node.y + 10;
                cc.loader.loadRes('fire', cc.AudioClip, function (err, clip) {
                    cc.audioEngine.playEffect(clip, false);
                });
                _this.fire = false;
            }, 1);
        }
    };
    __decorate([
        property(Number)
    ], TankControl.prototype, "speed", void 0);
    __decorate([
        property(cc.Prefab)
    ], TankControl.prototype, "bullet", void 0);
    TankControl = __decorate([
        ccclass
    ], TankControl);
    return TankControl;
}(cc.Component));
exports.default = TankControl;

cc._RF.pop();
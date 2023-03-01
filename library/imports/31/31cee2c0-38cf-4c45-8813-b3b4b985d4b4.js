"use strict";
cc._RF.push(module, '31ceeLAOM9MRYgTs7S5hdS0', 'bgcontrol');
// scripts/bgcontrol.ts

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
var playercontrol_1 = require("./playercontrol");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BgControl = /** @class */ (function (_super) {
    __extends(BgControl, _super);
    function BgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 4;
        _this.width = 287;
        _this.bird = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BgControl.prototype.start = function () {
        // for(let bg of this.node.children){
        //     bg.on(cc.Node.EventType.TOUCH_START,()=>{
        //         if(!this.bird.isDead){
        //             this.bird.fly()
        //         }
        //     })
        // }
    };
    BgControl.prototype.update = function (dt) {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bg = _a[_i];
            bg.x -= this.speed * dt;
            if (bg.x < -this.width) {
                bg.x += this.width * 2;
            }
        }
    };
    __decorate([
        property(Number)
    ], BgControl.prototype, "speed", void 0);
    __decorate([
        property(Number)
    ], BgControl.prototype, "width", void 0);
    __decorate([
        property(playercontrol_1.default)
    ], BgControl.prototype, "bird", void 0);
    BgControl = __decorate([
        ccclass
    ], BgControl);
    return BgControl;
}(cc.Component));
exports.default = BgControl;

cc._RF.pop();
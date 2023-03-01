"use strict";
cc._RF.push(module, 'f3c33TMufRFzIfLyLOm5Pvx', 'pipecontrol');
// scripts/pipecontrol.ts

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
var PipeControl = /** @class */ (function (_super) {
    __extends(PipeControl, _super);
    function PipeControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200;
        _this.width = 288;
        _this.tank = null;
        _this.heli = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    PipeControl.prototype.rand = function (m, n) {
        return Math.ceil(Math.random() * (n - m + 1) + m - 1);
    };
    PipeControl.prototype.start = function () {
        var _this = this;
        if (!window['global'].isDead) {
            this.schedule(function () {
                var tank = cc.instantiate(_this.tank);
                tank.setParent(cc.director.getScene());
                tank.x = 288 + Math.random() * 144;
                tank.y = 65;
            }, 2);
            this.schedule(function () {
                var heli = cc.instantiate(_this.heli);
                heli.setParent(cc.director.getScene());
                heli.x = 288 + Math.random() * 144;
                heli.y = 256 + Math.random() * 240;
            }, this.rand(3, 5));
        }
    };
    PipeControl.prototype.update = function (dt) {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var pipe = _a[_i];
            pipe.x -= this.speed * dt;
            if (pipe.x <= -50) {
                pipe.x = this.width * 2;
                pipe.y = Math.random() * 150 + 450;
            }
        }
    };
    __decorate([
        property(Number)
    ], PipeControl.prototype, "speed", void 0);
    __decorate([
        property(Number)
    ], PipeControl.prototype, "width", void 0);
    __decorate([
        property(cc.Prefab)
    ], PipeControl.prototype, "tank", void 0);
    __decorate([
        property(cc.Prefab)
    ], PipeControl.prototype, "heli", void 0);
    PipeControl = __decorate([
        ccclass
    ], PipeControl);
    return PipeControl;
}(cc.Component));
exports.default = PipeControl;

cc._RF.pop();
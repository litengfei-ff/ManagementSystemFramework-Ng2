"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var material_1 = require('@angular/material');
var router_1 = require('@angular/router');
var const_1 = require('../services/const');
var const_2 = require('../services/const');
var login_service_1 = require('../services/login.service');
var localData_service_1 = require('../services/localData.service');
var LoginComponent = (function () {
    function LoginComponent(snackBar, router, loginService, localDataService) {
        this.snackBar = snackBar;
        this.router = router;
        this.loginService = loginService;
        this.localDataService = localDataService;
        this.appName = const_1.AppName;
        this.loginData = { "JobNumber": "08001", "Pwd": "08001123" };
        this.isDoing = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginData.JobNumber) {
            this.snackBar.open('请输入用户名!', 'ok');
            return;
        }
        if (!this.loginData.Pwd) {
            this.snackBar.open('请输入密码!', 'ok');
            return;
        }
        this.isDoing = true;
        this.loginService.getToken(this.loginData).then(function (p) {
            _this.isDoing = false;
            if (p.reCode != 0) {
                _this.snackBar.open('用户名不存在或密码错误!', 'ok');
                return;
            }
            // 写入localstorage
            _this.localDataService.setItem(const_2.TokenName, JSON.stringify(p.data));
            // 进入主页
            _this.router.navigate(["/main/index"]);
        }).catch(function (e) {
            _this.isDoing = false;
            _this.snackBar.open(e, 'ok');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-component',
            templateUrl: "login.component.html",
            styleUrls: ["login.component.css"],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [material_1.MdSnackBar, router_1.Router, login_service_1.LoginService, localData_service_1.LocalDataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
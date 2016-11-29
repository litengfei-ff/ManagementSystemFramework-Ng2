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
var router_1 = require('@angular/router');
var material_1 = require('@angular/material');
var const_1 = require('../../services/const');
var localData_service_1 = require('../../services/localData.service');
var user_service_1 = require('../../services/user.service');
var HeaderComponent = (function () {
    function HeaderComponent(router, snackBar, loalDataService, userService) {
        this.router = router;
        this.snackBar = snackBar;
        this.loalDataService = loalDataService;
        this.userService = userService;
        this.appName = const_1.AppName;
    }
    // 初始化时 获取用户名和部门
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getDetail().then(function (p) {
            if (p.reCode == 0) {
                _this.userName = p.data.name;
                _this.userDeptName = p.data.deptName;
            }
        });
    };
    HeaderComponent.prototype.logOut = function () {
        this.loalDataService.clear();
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header-component',
            templateUrl: "header.component.html",
            styleUrls: ["header.component.css"],
        }), 
        __metadata('design:paramtypes', [router_1.Router, material_1.MdSnackBar, localData_service_1.LocalDataService, user_service_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map
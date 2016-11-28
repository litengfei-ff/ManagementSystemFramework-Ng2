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
var NavComponent = (function () {
    function NavComponent(snackBar, router) {
        this.snackBar = snackBar;
        this.router = router;
        // 不知道用不用呢
        this.navList = [
            {
                name: "系统管理",
                child: [
                    { name: "部门管理", link: "/main/dept" },
                    { name: "角色管理", link: "/main/role" },
                    { name: "用户管理", link: "/main/user" },
                    { name: "日志管理", link: "/main/user" },
                ]
            },
            {
                name: "业务管理",
                child: [
                    { name: "业务管理", link: "/main/yy" },
                ]
            },
        ];
        this.showSysNav = false;
        this.toogleIcon = "add";
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.toogleSysNav = function () {
        this.showSysNav = !this.showSysNav;
        if (this.toogleIcon == "add") {
            this.toogleIcon = "remove";
        }
        else {
            this.toogleIcon = "add";
        }
    };
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-component',
            templateUrl: "nav.component.html",
            styleUrls: ["nav.component.css"],
        }), 
        __metadata('design:paramtypes', [material_1.MdSnackBar, router_1.Router])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map
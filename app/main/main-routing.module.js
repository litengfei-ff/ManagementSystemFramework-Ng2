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
var main_component_1 = require('./main.component');
var index_component_1 = require('./index/index.component');
var dept_component_1 = require('./dept/dept.component');
var user_component_1 = require('./user/user.component');
var role_component_1 = require('./role/role.component');
var log_component_1 = require('./log/log.component');
var mainRoutes = [
    {
        path: '',
        component: main_component_1.MainComponent,
        children: [
            {
                path: 'index',
                component: index_component_1.IndexComponent
            },
            {
                path: 'user',
                component: user_component_1.UserComponent
            },
            {
                path: 'dept',
                component: dept_component_1.DeptComponent
            },
            {
                path: 'role',
                component: role_component_1.RoleComponent
            },
            {
                path: 'log',
                component: log_component_1.LogComponent
            }
        ]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(mainRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MainRoutingModule);
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
//# sourceMappingURL=main-routing.module.js.map
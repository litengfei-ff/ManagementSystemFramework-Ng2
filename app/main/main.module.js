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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var material_2 = require('@angular/material');
var main_routing_module_1 = require('./main-routing.module');
var main_component_1 = require('./main.component');
var header_component_1 = require('./header/header.component');
var nav_component_1 = require('./nav/nav.component');
var index_component_1 = require('./index/index.component');
var dept_component_1 = require('./dept/dept.component');
var user_component_1 = require('./user/user.component');
var role_component_1 = require('./role/role.component');
var log_component_1 = require('./log/log.component');
var singleline_dialog_1 = require('../dialog/singleline.dialog');
var confirm_dialog_1 = require('../dialog/confirm.dialog');
var localData_service_1 = require('../services/localData.service');
var user_service_1 = require('../services/user.service');
var dept_service_1 = require('../services/dept.service');
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                main_routing_module_1.MainRoutingModule,
                material_1.MaterialModule.forRoot(),
            ],
            declarations: [
                main_component_1.MainComponent,
                header_component_1.HeaderComponent,
                nav_component_1.NavComponent,
                index_component_1.IndexComponent,
                dept_component_1.DeptComponent,
                user_component_1.UserComponent,
                role_component_1.RoleComponent,
                log_component_1.LogComponent,
                singleline_dialog_1.SingleLineDialog, confirm_dialog_1.ConfirmDialog
            ],
            entryComponents: [
                singleline_dialog_1.SingleLineDialog, confirm_dialog_1.ConfirmDialog
            ],
            providers: [material_2.MdSnackBar, localData_service_1.LocalDataService, user_service_1.UserService, dept_service_1.DeptService],
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map
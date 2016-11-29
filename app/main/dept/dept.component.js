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
var singleline_dialog_1 = require('../../dialog/singleline.dialog');
var confirm_dialog_1 = require('../../dialog/confirm.dialog');
var dept_service_1 = require('../../services/dept.service');
var DeptComponent = (function () {
    function DeptComponent(deptService, snackBar, dialog) {
        this.deptService = deptService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.deptList = [];
    }
    Object.defineProperty(DeptComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeptComponent.prototype, "display", {
        get: function () {
            return 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeptComponent.prototype, "position", {
        get: function () {
            return 'absolute';
        },
        enumerable: true,
        configurable: true
    });
    // 初始化时获取部门列表
    DeptComponent.prototype.ngOnInit = function () {
        this.refresh(false);
    };
    // 选中项目改变时执行
    DeptComponent.prototype.checkChange = function (newItem, isChecked) {
        if (isChecked) {
            this.checkedItem = newItem;
        }
        else {
            this.checkedItem = 0;
        }
    };
    // 刷新
    DeptComponent.prototype.refresh = function (showMsg) {
        var _this = this;
        this.deptService.get().then(function (p) {
            if (p.reCode == 0) {
                _this.checkedItem = 0;
                _this.deptList = JSON.parse(p.data);
                if (showMsg) {
                    _this.snackBar.open('获取部门信息成功!', 'ok');
                }
            }
        });
    };
    //a 添加新部门
    DeptComponent.prototype.add = function (newName) {
        var _this = this;
        this.deptService.add(this.checkedItem, newName).then(function (p) {
            if (p.reCode == 0) {
                _this.snackBar.open('添加成功!', 'ok');
                _this.refresh(false);
            }
            else {
                _this.snackBar.open(p.msg || '添加失败', 'ok');
            }
        });
    };
    // 编辑
    DeptComponent.prototype.edit = function (newName) {
        var _this = this;
        this.deptService.edit(this.checkedItem, newName).then(function (p) {
            if (p.reCode == 0) {
                _this.snackBar.open('修改成功!', 'ok');
                _this.refresh(false);
            }
            else {
                _this.snackBar.open(p.msg || '修改失败', 'ok');
            }
        });
    };
    // 删除
    DeptComponent.prototype.delete = function () {
        var _this = this;
        this.deptService.delete(this.checkedItem).then(function (p) {
            if (p.reCode == 0) {
                _this.snackBar.open('删除成功', 'ok');
                _this.refresh(false);
            }
            else {
                _this.snackBar.open(p.msg || '删除失败', 'ok');
            }
        });
    };
    DeptComponent.prototype.openAddDialog = function () {
        var _this = this;
        if (!this.checkedItem) {
            this.snackBar.open('请选择需要添加部门的父级部门!', 'ok');
            return;
        }
        this.dialogRef = this.dialog.open(singleline_dialog_1.SingleLineDialog);
        this.dialogRef.componentInstance.dialogTile = "添加部门";
        this.dialogRef.componentInstance.dialogTip = "请输入部门名称";
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            if (result) {
                _this.add(result);
            }
        });
    };
    DeptComponent.prototype.openEditDialog = function () {
        var _this = this;
        if (!this.checkedItem) {
            this.snackBar.open('请选择需要进行编辑的部门!', 'ok');
            return;
        }
        this.dialogRef = this.dialog.open(singleline_dialog_1.SingleLineDialog);
        this.dialogRef.componentInstance.dialogTile = "编辑部门";
        this.dialogRef.componentInstance.dialogTip = "请输入新的部门名称";
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            if (result) {
                _this.edit(result);
            }
        });
    };
    DeptComponent.prototype.openDeleteDialog = function () {
        var _this = this;
        if (!this.checkedItem) {
            this.snackBar.open('请选择需要进行删除的部门!', 'ok');
            return;
        }
        this.confirmDialogRef = this.dialog.open(confirm_dialog_1.ConfirmDialog);
        this.confirmDialogRef.componentInstance.dialogTile = "确定要执行删除操作吗？";
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.confirmDialogRef = null;
            if (result) {
                _this.delete();
            }
        });
    };
    __decorate([
        core_1.HostBinding('@routeAnimation'), 
        __metadata('design:type', Object)
    ], DeptComponent.prototype, "routeAnimation", null);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', Object)
    ], DeptComponent.prototype, "display", null);
    __decorate([
        core_1.HostBinding('style.position'), 
        __metadata('design:type', Object)
    ], DeptComponent.prototype, "position", null);
    DeptComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dept-component',
            templateUrl: "dept.component.html",
            styleUrls: ["../main.component.css", "dept.component.css"],
            animations: [
                core_1.trigger('routeAnimation', [
                    core_1.state('*', core_1.style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    core_1.transition(':enter', [
                        core_1.style({
                            opacity: 0,
                            transform: 'translateY(-100%)'
                        }),
                        core_1.animate('0.2s ease-in')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [dept_service_1.DeptService, material_1.MdSnackBar, material_1.MdDialog])
    ], DeptComponent);
    return DeptComponent;
}());
exports.DeptComponent = DeptComponent;
//# sourceMappingURL=dept.component.js.map
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
var ConfirmDialog = (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialog.prototype.dialogCancel = function () {
        this.dialogRef.close();
    };
    ConfirmDialog.prototype.dialogOK = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <span  class=\"dialogTitle\">\n        {{dialogTile}}\n    </span>\n    <button md-raised-button class=\"dialogOkBtn fr\"     (click)=\"dialogOK()\">\u786E\u5B9A</button> \n    <button md-raised-button class=\"dialogCancelBtn fr\" (click)=\"dialogCancel()\">\u53D6\u6D88</button> \n  ",
            styles: [
                "\n        .iconTitle{\n\n        }\n        .dialogTitle{\n            color: white;\n            background: #3f51b5;\n            display: inline-block;\n            width: 100%;\n            padding: 10px 0 10px 10px;\n            margin-bottom: 20px;}\n        .dialogOkBtn{background: #0e90d2; color:white;}\n        .dialogCancelBtn{background: #ddd; margin-right:20px; }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [material_1.MdDialogRef])
    ], ConfirmDialog);
    return ConfirmDialog;
}());
exports.ConfirmDialog = ConfirmDialog;
//# sourceMappingURL=confirm.dialog.js.map
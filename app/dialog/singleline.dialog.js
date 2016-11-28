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
var SingleLineDialog = (function () {
    function SingleLineDialog(dialogRef, snackBar) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
    }
    SingleLineDialog.prototype.dialogCancel = function () {
        this.dialogRef.close();
    };
    SingleLineDialog.prototype.dialogOK = function (value) {
        if (!value) {
            this.snackBar.open(this.dialogTip, 'ok');
            return;
        }
        this.dialogRef.close(value);
    };
    SingleLineDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <span  class=\"dialogTitle\">{{dialogTile}}</span>\n    <md-input style=\"width:100%\" placeholder=\"{{dialogTip}}\" #dialogVal  (keyup)=\"0\" ></md-input>\n   \n    <button md-raised-button class=\"dialogOkBtn fr\"     (click)=\"dialogOK(dialogVal.value)\">\u786E\u5B9A</button> \n    <button md-raised-button class=\"dialogCancelBtn fr\" (click)=\"dialogCancel()\">\u53D6\u6D88</button> \n    \n  ",
            styles: [
                "\n        .dialogTitle\n        {\n            color: white;\n            background: #3f51b5;\n            display: inline-block;\n            width: 100%;\n            padding: 10px 0 10px 10px;\n            margin-bottom: 20px;\n        }\n        .dialogOkBtn\n        {\n            background: #0e90d2; color:white;\n        }\n        .dialogCancelBtn\n        {\n            background: #ddd;\n            margin-right:10px;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [material_1.MdDialogRef, material_1.MdSnackBar])
    ], SingleLineDialog);
    return SingleLineDialog;
}());
exports.SingleLineDialog = SingleLineDialog;
//# sourceMappingURL=singleline.dialog.js.map
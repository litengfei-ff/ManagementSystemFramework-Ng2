import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    template: `
    <span  class="dialogTitle">
        {{dialogTile}}
    </span>
    <button md-raised-button class="dialogOkBtn fr"     (click)="dialogOK()">确定</button> 
    <button md-raised-button class="dialogCancelBtn fr" (click)="dialogCancel()">取消</button> 
  `,
    styles: [
        `
        .iconTitle{

        }
        .dialogTitle{
            color: white;
            background: #3f51b5;
            display: inline-block;
            width: 100%;
            padding: 10px 0 10px 10px;
            margin-bottom: 20px;}
        .dialogOkBtn{background: #0e90d2; color:white;}
        .dialogCancelBtn{background: #ddd; margin-right:20px; }
    `
    ]
})
export class ConfirmDialog {
    dialogTile: string;
    constructor(private dialogRef: MdDialogRef<ConfirmDialog>) { }

    dialogCancel() {
        this.dialogRef.close();
    }
    dialogOK() {
        this.dialogRef.close(true);
    }
}
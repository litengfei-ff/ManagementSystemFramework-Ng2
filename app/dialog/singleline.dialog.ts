import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    template: `
    <span  class="dialogTitle">{{dialogTile}}</span>
    <md-input style="width:100%" placeholder="{{dialogTip}}" #dialogVal  (keyup)="0" ></md-input>
   
    <button md-raised-button class="dialogOkBtn fr"     (click)="dialogOK(dialogVal.value)">确定</button> 
    <button md-raised-button class="dialogCancelBtn fr" (click)="dialogCancel()">取消</button> 
    
  `,
    styles: [
        `
        .dialogTitle
        {
            color: white;
            background: #3f51b5;
            display: inline-block;
            width: 100%;
            padding: 10px 0 10px 10px;
            margin-bottom: 20px;
        }
        .dialogOkBtn
        {
            background: #0e90d2; color:white;
        }
        .dialogCancelBtn
        {
            background: #ddd;
            margin-right:10px;
        }
    `
    ]
})
export class SingleLineDialog {
    dialogTile: string;
    dialogTip: string;
    constructor(private dialogRef: MdDialogRef<SingleLineDialog>, private snackBar: MdSnackBar) { }

    dialogCancel() {
        this.dialogRef.close();
    }
    dialogOK(value: string) {
        if (!value) { this.snackBar.open(this.dialogTip, 'ok'); return; }
        this.dialogRef.close(value);
    }
}
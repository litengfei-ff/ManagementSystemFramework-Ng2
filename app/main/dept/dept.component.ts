import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { MdSnackBar, MdDialogConfig, MdDialog, MdDialogRef } from '@angular/material';

import { SingleLineDialog } from '../../dialog/singleline.dialog';
import { ConfirmDialog } from '../../dialog/confirm.dialog';
import { DeptService } from '../../services/dept.service'

@Component({
    moduleId: module.id,
    selector: 'dept-component',
    templateUrl: "dept.component.html",
    styleUrls: ["../main.component.css", "dept.component.css"],
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateY(-100%)'
                }),
                animate('0.2s ease-in')
            ])
        ])
    ]
})
export class DeptComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    @HostBinding('style.display') get display() {
        return 'block';
    }

    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    checkedItem: number;
    deptList = [];
    constructor(private deptService: DeptService, private snackBar: MdSnackBar, private dialog: MdDialog) { }
    // 初始化时获取部门列表
    ngOnInit(): void {
        this.refresh(false);
    }

    // 选中项目改变时执行
    checkChange(newItem: number, isChecked) {
        if (isChecked) {
            this.checkedItem = newItem;
        } else {
            this.checkedItem = 0;
        }
    }

    // 刷新
    refresh(showMsg: boolean): void {
        this.deptService.get().then(p => {
            if (p.reCode == 0) {
                this.checkedItem = 0;
                this.deptList = JSON.parse(p.data);
                if (showMsg) {
                    this.snackBar.open('获取部门信息成功!', 'ok');
                }
            }
        }).catch(e => {
            this.snackBar.open('获取部门信息失败!', 'ok');
        })
    }

    //a 添加新部门
    add(newName: string): void {
        this.deptService.add(this.checkedItem, newName).then(p => {
            if (p.reCode == 0) {
                this.snackBar.open('添加成功!', 'ok');
                this.refresh(false);
            }
            else {
                this.snackBar.open(p.msg || '添加失败', 'ok');
            }
        }).catch(
            e => {
                this.snackBar.open(e, 'ok');
            });
    }
    // 编辑
    edit(newName: string): void {
        this.deptService.edit(this.checkedItem, newName).then(p => {
            if (p.reCode == 0) {
                this.snackBar.open('修改成功!', 'ok');
                this.refresh(false);
            }
            else {
                this.snackBar.open(p.msg || '修改失败', 'ok');
            }
        }).catch(
            e => {
                this.snackBar.open(e, 'ok');
            });
    }
    // 删除
    delete(): void {
        this.deptService.delete(this.checkedItem).then(p => {
            if (p.reCode == 0) {
                this.snackBar.open('删除成功', 'ok');
                this.refresh(false);
            }
            else {
                this.snackBar.open(p.msg || '删除失败', 'ok');
            }
        }).catch(
            e => {
                this.snackBar.open(e, 'ok');
            });
    }

    // 对话框相关
    dialogRef: MdDialogRef<SingleLineDialog>;
    openAddDialog() {
        if (!this.checkedItem) { this.snackBar.open('请选择需要添加部门的父级部门!', 'ok'); return; }

        this.dialogRef = this.dialog.open(SingleLineDialog)
        this.dialogRef.componentInstance.dialogTile = "添加部门";
        this.dialogRef.componentInstance.dialogTip = "请输入部门名称";
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            if (result) {
                this.add(result);
            }
        });
    }

    openEditDialog() {
        if (!this.checkedItem) { this.snackBar.open('请选择需要进行编辑的部门!', 'ok'); return; }

        this.dialogRef = this.dialog.open(SingleLineDialog)
        this.dialogRef.componentInstance.dialogTile = "编辑部门";
        this.dialogRef.componentInstance.dialogTip = "请输入新的部门名称";
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            if (result) {
                this.edit(result);
            }
        });
    }
    confirmDialogRef: MdDialogRef<ConfirmDialog>;
    openDeleteDialog() {
        if (!this.checkedItem) { this.snackBar.open('请选择需要进行删除的部门!', 'ok'); return; }

        this.confirmDialogRef = this.dialog.open(ConfirmDialog)
        this.confirmDialogRef.componentInstance.dialogTile = "确定要执行删除操作吗？";
        this.confirmDialogRef.afterClosed().subscribe(result => {
            this.confirmDialogRef = null;
            if (result) {
                this.delete();
            }
        });
    }
}



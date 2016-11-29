import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { AppName } from '../../services/const';
import { LocalDataService } from '../../services/localData.service';
import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"],
})

export class HeaderComponent {
    appName = AppName;
    userName: string;
    userDeptName: string;

    constructor(
        private router: Router,
        private snackBar: MdSnackBar,
        private loalDataService: LocalDataService,
        private userService: UserService
    ) { }

    // 初始化时 获取用户名和部门
    ngOnInit() {
        this.userService.getDetail().then(
            p => {
                if (p.reCode == 0) {
                    this.userName = p.data.name;
                    this.userDeptName = p.data.deptName;
                }
            }
        );
    }

    logOut(): void {
        this.loalDataService.clear();
        this.router.navigate(['/login']);

    }
}

import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { AppName } from '../services/const';
import { TokenName } from '../services/const';
import { LoginInfo } from '../entity/entities';
import { LoginService } from '../services/login.service';
import { LocalDataService } from '../services/localData.service';

@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"],
    providers: [LoginService]
})

export class LoginComponent {

    constructor(
        private snackBar: MdSnackBar,
        private router: Router,
        private loginService: LoginService,
        private localDataService: LocalDataService
    ) { }

    appName = AppName;
    loginData: LoginInfo = { "JobNumber": "08001", "Pwd": "08001123" };
    isDoing: boolean = false;

    login(): void {
        if (!this.loginData.JobNumber) {
            this.snackBar.open('请输入用户名!', 'ok'); return;
        }
        if (!this.loginData.Pwd) {
            this.snackBar.open('请输入密码!', 'ok'); return;
        }
        this.isDoing = true;
        this.loginService.getToken(this.loginData).then(
            p => {
                this.isDoing = false;
                if (p.reCode != 0)
                { this.snackBar.open('用户名不存在或密码错误!', 'ok'); return; }
                // 写入localstorage
                this.localDataService.setItem(TokenName, JSON.stringify(p.data));
                // 进入主页
                this.router.navigate(["/main/index"]);

            }
        ).catch(e => {
            this.isDoing = false;
            this.snackBar.open(e, 'ok');
        });
    }

}

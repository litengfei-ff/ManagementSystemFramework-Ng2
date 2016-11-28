import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'nav-component',
    templateUrl: "nav.component.html",
    styleUrls: ["nav.component.css"],
})

export class NavComponent implements OnInit {

    constructor(
        private snackBar: MdSnackBar,
        private router: Router
    ) { }

    ngOnInit() { }

    // 不知道用不用呢
    navList = [
        {
            name: "系统管理",
            child: [
                { name: "部门管理", link: "/main/dept" },
                { name: "角色管理", link: "/main/role" },
                { name: "用户管理", link: "/main/user" },
                { name: "日志管理", link: "/main/user" },
            ]
        },
        {
            name: "业务管理",
            child: [
                { name: "业务管理", link: "/main/yy" },

            ]
        },
    ];

    showSysNav: boolean = false;
    toogleIcon: string = "add";
    toogleSysNav(): void {
        this.showSysNav = !this.showSysNav;
        if (this.toogleIcon == "add") { this.toogleIcon = "remove"; }
        else { this.toogleIcon = "add"; }
    }


}

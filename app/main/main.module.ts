import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';

import { MainRoutingModule } from './main-routing.module'

import { MainComponent } from './main.component'
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component'
import { DeptComponent } from './dept/dept.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { LogComponent } from './log/log.component';

import { SingleLineDialog } from '../dialog/singleline.dialog';
import { ConfirmDialog } from '../dialog/confirm.dialog';

import { LocalDataService } from '../services/localData.service';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';
import { DeptService } from '../services/dept.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        MainComponent,
        HeaderComponent,
        NavComponent,
        IndexComponent,
        DeptComponent,
        UserComponent,
        RoleComponent,
        LogComponent,
        SingleLineDialog, ConfirmDialog
    ],
    entryComponents: [
        SingleLineDialog, ConfirmDialog
    ],
    providers: [MdSnackBar, LocalDataService, HttpService, UserService, DeptService],
})
export class MainModule { }

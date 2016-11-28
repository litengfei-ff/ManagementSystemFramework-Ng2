import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { MainComponent } from './main.component'; 
import { IndexComponent } from './index/index.component'; 
import { DeptComponent } from './dept/dept.component'; 
import { UserComponent } from './user/user.component'; 
import { RoleComponent } from './role/role.component'; 
import { LogComponent } from './log/log.component'; 

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'dept',
        component: DeptComponent
      },
      {
        path: 'role',
        component: RoleComponent
      },
      {
        path: 'log',
        component: LogComponent
      }
    ]
  }
];


@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }

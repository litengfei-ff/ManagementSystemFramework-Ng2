import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './notfound/notfound.component';

import { MainModule } from './main/main.module';

import { LocalDataService } from './services/localData.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MainModule,
        AppRoutingModule,
        MaterialModule.forRoot()

    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    providers: [MdSnackBar, LocalDataService],
    bootstrap: [AppComponent],
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from '../services/localData.service';

@Component({
    moduleId: module.id,
    templateUrl: "main.component.html",
    styleUrls: ["main.component.css"]
})

export class MainComponent implements OnInit{
     constructor(
        private router: Router,
        private loalDataService: LocalDataService
    ) { }
    // 进入时判断用户是否已经退出
    ngOnInit() { 
         if(this.loalDataService.getItem("spatoken")==null)
         {
             this.router.navigate(["/login"]);
         } 
    }
}

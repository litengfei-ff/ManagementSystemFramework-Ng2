"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var localData_service_1 = require('../services/localData.service');
var const_1 = require('./const');
var UserService = (function () {
    function UserService(http, localDataService) {
        this.http = http;
        this.localDataService = localDataService;
        this.loginUrl = const_1.BaseUrl + '/api/user/getDetail';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            "Authorization": "bearer " + JSON.parse(this.localDataService.getItem(const_1.TokenName)).accessToken
        });
    }
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
    };
    UserService.prototype.getDetail = function () {
        return this.http.get(this.loginUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, localData_service_1.LocalDataService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
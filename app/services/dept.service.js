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
var http_service_1 = require('../services/http.service');
var const_1 = require('./const');
var DeptService = (function () {
    function DeptService(httpService) {
        this.httpService = httpService;
        this.getUrl = const_1.BaseUrl + '/api/dept/get';
        this.addUrl = const_1.BaseUrl + '/api/dept/add';
        this.editUrl = const_1.BaseUrl + '/api/dept/edit';
        this.deleteUrl = const_1.BaseUrl + '/api/dept/del/';
    }
    DeptService.prototype.get = function () {
        return this.httpService.get(this.getUrl)
            .then(function (response) { return response; });
    };
    DeptService.prototype.add = function (deptId, deptName) {
        return this.httpService.add(this.addUrl, JSON.stringify({ Id: deptId, DepartmentName: deptName }))
            .then(function (response) { return response; });
    };
    DeptService.prototype.edit = function (deptId, deptName) {
        return this.httpService.edit(this.editUrl, JSON.stringify({ Id: deptId, DepartmentName: deptName }))
            .then(function (response) { return response; });
    };
    DeptService.prototype.delete = function (deptId) {
        return this.httpService.delete(this.deleteUrl + deptId)
            .then(function (response) { return response; });
    };
    DeptService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], DeptService);
    return DeptService;
}());
exports.DeptService = DeptService;
//# sourceMappingURL=dept.service.js.map
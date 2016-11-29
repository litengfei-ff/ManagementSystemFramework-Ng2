import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

import { BaseUrl } from './const';
import { Ret, RetData, Token } from '../entity/entities';

@Injectable()
export class DeptService {

    private getUrl = BaseUrl + '/api/dept/get';
    private addUrl = BaseUrl + '/api/dept/add';
    private editUrl = BaseUrl + '/api/dept/edit';
    private deleteUrl = BaseUrl + '/api/dept/del/';

    constructor(private httpService: HttpService) { }

    get(): Promise<RetData<string>> {
        return this.httpService.get(this.getUrl)
            .then(response => response as RetData<string>);
    }

    add(deptId: number, deptName: string): Promise<Ret> {
        return this.httpService.add(this.addUrl, JSON.stringify({ Id: deptId, DepartmentName: deptName }))
            .then(response => response as Ret);
    }
    edit(deptId: number, deptName: string): Promise<Ret> {
        return this.httpService.edit(this.editUrl, JSON.stringify({ Id: deptId, DepartmentName: deptName }))
            .then(response => response as Ret);
    }
    delete(deptId: number): Promise<Ret> {
        return this.httpService.delete(this.deleteUrl + deptId)
            .then(response => response as Ret);
    }
}
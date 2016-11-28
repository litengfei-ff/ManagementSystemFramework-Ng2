import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { LocalDataService } from '../services/localData.service';
import { BaseUrl, TokenName } from './const';
import { Ret, RetData, Token } from '../entity/entities';

@Injectable()
export class DeptService {
    private getUrl = BaseUrl + '/api/dept/get';
    private addUrl = BaseUrl + '/api/dept/add';
    private editUrl = BaseUrl + '/api/dept/edit';
    private deleteUrl = BaseUrl + '/api/dept/del/';
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            "Authorization": "bearer " + (JSON.parse(this.localDataService.getItem(TokenName)) as Token).accessToken
        });
    constructor(private http: Http, private localDataService: LocalDataService) { }


    private handleError(error: any) {
        console.error('An error occurred', error);
        if (error.status == 401) {
            alert("系统超时，请重新登录。")
            window.location.href = "/login";
        }
    }

    get(): Promise<RetData<string>> {
        return this.http.get(this.getUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as RetData<string>)
            .catch(this.handleError);
    }

    add(deptId: number, deptName: string): Promise<Ret> {
        return this.http.post(this.addUrl, JSON.stringify({ Id: deptId, DepartmentName: deptName }), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Ret)
            .catch(this.handleError);
    }
    edit(deptId: number, deptName: string): Promise<Ret> {
        return this.http.put(this.editUrl, JSON.stringify({ Id: deptId, DepartmentName: deptName }), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Ret)
            .catch(this.handleError);
    }
    delete(deptId: number): Promise<Ret> {
        return this.http.delete(this.deleteUrl + deptId, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Ret)
            .catch(this.handleError);
    }
}
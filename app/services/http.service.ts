import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { LocalDataService } from '../services/localData.service';
import { TokenName } from './const';
import { Token } from '../entity/entities';

@Injectable()
export class HttpService {

    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            "Authorization": "bearer " + (JSON.parse(this.localDataService.getItem(TokenName)) as Token).accessToken
        });
    constructor(private http: Http, private localDataService: LocalDataService) { }

    private handleError(error: any) {
        console.error('An error occurred', error);

        if (error.status == 0) {
            alert('无法连接到服务器!');
        }
        if (error.status == 401) {
            alert('连接超时，请重新登录!');
            window.location.href = "/login";
        }
    }

    get(url: string): Promise<any> {
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    add(url: string, jsonStrData: string): Promise<any> {
        return this.http.post(url, jsonStrData, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    edit(url: string, jsonStrData: string): Promise<any> {
        return this.http.put(url, jsonStrData, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    delete(url: string): Promise<any> {
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
}
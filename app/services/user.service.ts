import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UserDetailInfo, RetData, Token } from '../entity/entities';
import { LocalDataService } from '../services/localData.service';
import { BaseUrl, TokenName } from './const';


@Injectable()
export class UserService {

    constructor(private http: Http, private localDataService: LocalDataService) { }

    private loginUrl = BaseUrl + '/api/user/getDetail';
    private headers = new Headers(
        {
            'Content-Type': 'application/json',
            "Authorization": "bearer " + (JSON.parse(this.localDataService.getItem(TokenName)) as Token).accessToken
        });

    private handleError(error: any) {
        console.error('An error occurred', error);
    }

    getDetail(): Promise<RetData<UserDetailInfo>> {
        return this.http.get(this.loginUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as RetData<UserDetailInfo>)
            .catch(this.handleError);
    }

}
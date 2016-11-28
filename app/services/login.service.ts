import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BaseUrl } from './const';
import { LoginInfo, Token, RetData } from '../entity/entities';


@Injectable()
export class LoginService {
    private loginUrl = BaseUrl + '/api/gettoken';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    private handleError(error: any) {
        console.error('An error occurred', error);
    }

    getToken(loginData: LoginInfo): Promise<RetData<Token>> {
        return this.http.put(this.loginUrl, JSON.stringify(loginData), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as RetData<Token>)
            .catch(this.handleError);
    }

}
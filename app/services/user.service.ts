import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

import { BaseUrl } from './const';
import { Ret, RetData, Token, UserDetailInfo } from '../entity/entities';


@Injectable()
export class UserService {

    constructor(private httpService: HttpService) { }

    private loginUrl = BaseUrl + '/api/user/getDetail';

    getDetail(): Promise<RetData<UserDetailInfo>> {
        return this.httpService.get(this.loginUrl)
            .then(response => response as RetData<UserDetailInfo>);
    }

}
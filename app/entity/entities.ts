
// 登录时用的实体
export class LoginInfo {
    public Pwd: string;
    public JobNumber: string;
}

// 不带数据的返回信息
export class Ret {
    public reCode: number;
    public msg: string;
}

// 带数据的返回信息
export class RetData<T> {
    public reCode: number;
    public msg: string;
    public data: T;
}

// 令牌信息
export class Token {
    public accessToken: string;
    public expiresIn: number;
}

// 当前登录用户详细信息
export class UserDetailInfo {
    public id: number;
    public name: string;
    public jobNumber: string;
    public deptName: string;
}


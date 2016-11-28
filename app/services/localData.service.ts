import { Injectable } from '@angular/core';

@Injectable()
export class LocalDataService {

    getItem(key: string): string {
        return window.localStorage.getItem(key);
    }

    setItem(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    clear(): void {
        window.localStorage.clear();
    }

}
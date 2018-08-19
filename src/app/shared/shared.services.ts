import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class SharedServices {
    Url: string = "http://localhost/Teste_Hbsis.WebApi/api/Cliente/GetClientes";
    Http: Http;
    constructor(http: Http) {
        this.Http = http;
        this.GetListagem();
    }

    private handleErrorObservable(error: Response | any): any {
        console.error(error.message || error);
        return;
    }

    public GetListagem(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, url: this.Url });
        return this.Http.get(this.Url, options);
    }
}
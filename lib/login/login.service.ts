import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  result: Response

  login(user: string, password: string, url: string): Promise<any> {

    var deepThoughtRelativePath = window.location.origin + "/webservices/DeepThought.asmx";

    var path = "";
    if (window.location.hostname === "localhost") {
      path = "http://localhost:60317/webservices/DeepThought.asmx/Login";
    } else {
      path = deepThoughtRelativePath + "/Login";
    }

    let body = JSON.stringify({ 'login': user, 'password': Sha256.hash(password), 'url': url });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(path, body, options)
      .toPromise()
      .then(res => JSON.parse(res.json().d))
  }

}

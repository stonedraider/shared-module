import { Injectable, Component } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

@Injectable()

export class MailService {

  constructor(private http: Http) { }

  SendEmail(subject: string, text: string, additional: string, customerEmail: string) {
    var deepThoughtRelativePath = window.location.origin + "/webservices/DeepThought.asmx";
    var data =  { subject: subject, text: text, additional: additional, customerEmail: customerEmail };
    var query = "/SendEmail";
    if (window.location.hostname === "localhost") {
      // da die SMTP Addresse auf everyware ist und keine zugriffe von ausserhalb zulässt greiffen wir, wenn es lokal ist direkt auf das DeepThaught auf dem Server zu (dies ist nur möglich dank ein paar einstellungen in der webconfig) 
      query = "http://dev.geok.enersis.ch" + "/webservices/DeepThought.asmx" + query;
      } else {
      query = deepThoughtRelativePath + query;
    }
    return this.http.post(query, data)
    .toPromise()
    .then(response => function() {
      response.json().d.returnvalueMail; 
    })
    .catch(this.handleError);    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

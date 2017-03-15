import { MailService } from '../../services/mail/mail.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kontaktformular',
  providers: [MailService],
  templateUrl: './kontaktformular.component.html',
  styleUrls: ['./kontaktformular.component.less']
})
export class KontaktformularComponent {


  constructor(private mailService: MailService) { }
  id : number = 1;

  model = new kontaktformular(this.id, '', '', '');
  submitted = false;
  onSubmit() {
    let name = (<HTMLInputElement>document.getElementById("mailName")).value;
    let mail = (<HTMLInputElement>document.getElementById("mailEmail")).value;
    let challenge = (<HTMLInputElement>document.getElementById("mailChallenge")).value;
    this.submitted = true;
    var success = Promise.resolve(this.mailService.SendEmail("Kontaktformular Geok", name, challenge, mail)
    );
  }
  newkontaktformular() {
    this.id += 1;
    this.model = new kontaktformular(this.id, '', '', '');
  }

}
export class kontaktformular {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public challenge: string
  ) { }
}

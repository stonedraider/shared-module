import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GreeterModule } from '../../lib/greeter/greeter.module';

import { ModalModule } from '../../lib/ng2-bs3-modal/modal.module';
import { FooterModule } from '../../lib/footer/footer.module';
import { KontaktformularModule } from '../../lib/footer/kontaktformular/kontaktformular.module';

import { LoginModule } from '../../lib/login/login.module'
// import { LoginService } from './../../lib/login/login.service';

import { AppComponent } from './app.component';
// import { LoginDialogComponent } from './../../lib/login/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    GreeterModule,
    FooterModule,
    KontaktformularModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

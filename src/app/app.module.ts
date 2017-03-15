import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModalModule } from '../../lib/ng2-bs3-modal/modal.module';
import { GreeterModule } from '../../lib/greeter/greeter.module';
import { FooterModule } from '../../lib/footer/footer.module';
import { KontaktformularModule } from '../../lib/footer/kontaktformular/kontaktformular.module';

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
    KontaktformularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

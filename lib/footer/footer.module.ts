import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FormsModule} from '@angular/forms';

import { ModalModule } from '../ng2-bs3-modal/modal.module';
import { KontaktformularModule } from './kontaktformular/kontaktformular.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    KontaktformularModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
}
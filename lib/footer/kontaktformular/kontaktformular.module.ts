import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KontaktformularComponent} from './kontaktformular.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [KontaktformularComponent],
  exports: [KontaktformularComponent]
})
export class KontaktformularModule {
}
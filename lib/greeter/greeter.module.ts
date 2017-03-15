import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GreeterComponent} from './greeter.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [GreeterComponent],
  exports: [GreeterComponent]
})
export class GreeterModule {
}
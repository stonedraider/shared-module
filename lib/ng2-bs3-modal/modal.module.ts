import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal';
import { ModalBodyComponent } from './modal-body';
import { ModalFooterComponent } from './modal-footer';
import { ModalHeaderComponent } from './modal-header';
import { ModalInstance } from './modal-instance';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent
  ],
  exports: [
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent
  ]
})
export class ModalModule {
}
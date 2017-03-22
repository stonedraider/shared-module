import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginDialogComponent } from './login-dialog.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginDialogComponent
  ],
  exports: [
    LoginDialogComponent,
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
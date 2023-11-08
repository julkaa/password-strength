import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PasswordValidatorComponent} from './password-block/password-validator/password-validator.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PasswordBlockComponent} from './password-block/password-block.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorComponent,
    PasswordBlockComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

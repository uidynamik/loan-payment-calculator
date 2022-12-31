import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoanFormComponent,
    LoanDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChangeComponent } from './change/change.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { ServiceService } from './service.service';
import { RegisterComponent } from './register/register.component';
import { MyDatePickerModule } from 'mydatepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangeComponent,
    SuccessComponent,
    FailComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
    MyDatePickerModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

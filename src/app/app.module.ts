import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { contactsComponent } from './contacts/contacts.component';
import { TryworkComponent } from './trywork/trywork.component';

@NgModule({
  declarations: [
    AppComponent,
    contactsComponent,
    TryworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [BrowserModule, HttpClientModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//(ngSubmit)="onSubmit(contactForm)"

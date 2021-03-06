import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing.module';
import {MainModule} from './main/main.module';
import {HomeModule} from './home/home.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

    NgbModule.forRoot(),

    MainModule,
    HomeModule,
    
    AppRoutingModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

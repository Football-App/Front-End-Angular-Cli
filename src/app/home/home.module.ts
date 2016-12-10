import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CiudadService } from '../shared/ciudad/ciudad.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [HomeComponent],
  providers: [ CiudadService ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './nav/menu.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule

  ],
  declarations: [ MainComponent,
                  HeaderComponent,
                  FooterComponent,
                //  MenuComponent
                ]
})
export class MainModule { }

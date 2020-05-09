import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RootRoutingModule
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule { }

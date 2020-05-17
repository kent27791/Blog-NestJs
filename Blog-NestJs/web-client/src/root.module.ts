import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './app/main/shared/store/reducers/article.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    CommonModule,
    RootRoutingModule,
    SharedModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
    }),
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { ListaComponentComponent } from './lista-component/lista-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    ListaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

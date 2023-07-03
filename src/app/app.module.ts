import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { ListaComponentComponent } from './lista-component/lista-component.component';
import { BibliotecaDataComponent } from './biblioteca-data/biblioteca-data.component';
import { LibriComponent } from './libri/libri.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    ListaComponentComponent,
    BibliotecaDataComponent,
    LibriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

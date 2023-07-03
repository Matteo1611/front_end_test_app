import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { ListaComponentComponent } from './lista-component/lista-component.component';
import { BibliotecaDataComponent } from './biblioteca-data/biblioteca-data.component';
import { LibriComponent } from './libri/libri.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AutoriComponent } from './autori/autori.component';
import { PrestitiComponent } from './prestiti/prestiti.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    ListaComponentComponent,
    BibliotecaDataComponent,
    LibriComponent,
    HomeComponent,
    AutoriComponent,
    PrestitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     RouterModule.forRoot([
          { path: 'home', component: HomeComponent },
          { path: 'autori', component: AutoriComponent },
          { path: 'libri', component: LibriComponent },

        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

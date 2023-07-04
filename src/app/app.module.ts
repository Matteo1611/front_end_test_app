import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibriComponent } from './libri/libri.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AutoriComponent } from './autori/autori.component';
import { PrestitiComponent } from './prestiti/prestiti.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LibriComponent,
    HomeComponent,
    AutoriComponent,
    PrestitiComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'autori', component: AutoriComponent },
        { path: 'libri', component: LibriComponent },
        { path: 'prestiti', component: PrestitiComponent }


      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

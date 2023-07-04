import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.css']
})
export class AutoriComponent {
  autori: any[] = [];
  autoreRicerca: any;
  idAutore: number = 0;

  constructor(private http: HttpClient) { }

  getAutoreById():void{
    let urlRicerca = 'http://localhost:8080/api/searchAutore?id_ricerca='+this.idAutore;
    this.http.get<any>(urlRicerca).subscribe(
      response => {
        this.autoreRicerca = response;
        console.log(this.autoreRicerca);
        
      }
    )
  }

  onIdAutoreChange(event: any) {
    if (event && event.target && event.target.value != null)
      this.idAutore = Number(event.target.value);
    console.log(this.idAutore);
  }

  getAllAutori(): void {
    this.http.get<any[]>('http://localhost:8080/api/autori').subscribe(
      response => {
        this.autori = response;
        console.log(this.autori);
      },
      error => {
        console.error(error);
      }
    );
  }



}

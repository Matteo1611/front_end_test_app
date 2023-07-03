import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})


export class LibriComponent {
  libri: any[] = [];
  libro = {
    idLibro: 10,
    titolo: "Libro1",
    autore: "autoreProva",
    genere: "genere",
    annoPubblicazione: "1304-03-10T00:00:00"
  };

  constructor(private http: HttpClient) { }

  getAllLibri(): void {
    this.http.get<any[]>('http://localhost:8080/libri/getAll').subscribe(
      response => {
        this.libri = response;
        console.log(this.libri);
      },
      error => {
        console.error(error);
      }
    );
  }

  makePostLibro(libro: any): void{
    const url = 'http://localhost:8080/libri/post';
    const dataLibro = {
      titolo: 'Libro1',
      autore: 'autoreProva',
      genere: 'genere',
      annoPubblicazione: '1304-03-10T00:00:00'
    };
    this.http.post(url,libro);
    console.log("Richiesta POST");

  }

  // makePostLibro(): void{
  //   this.http.post<any[]>('http://localhost:8080/libri/post',this.libro).subscribe(
  //   //  (libro: any) => {
  //         // this.libro = libro;
       
  //     //  }
  //     () => console.log("Richiesta POST completata")
  //     );
  // }

}

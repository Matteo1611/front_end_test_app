import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})


export class LibriComponent {
  libri: any[] = [];
  idLibro: number = 0;
  libro = {
    titolo: "Libro1",
    autore: "autoreProva",
    genere: "genere",
    annoPubblicazione: "1304-03-10T00:00:00"
  };
  libroRicerca = {
    titolo: "",
    autore: "",
    categoria: "",
    dataPubblicazione: ""
  };

  constructor(private http: HttpClient) { 
  }

  onIdLibroChange(event: any) {
    if (event && event.target && event.target.value != null)
      this.idLibro = Number(event.target.value);
    console.log(this.idLibro);
  }


  getLibroById(): void{
    let urlRicerca = 'http://localhost:8080/libri/searchLibro?id_ricerca='+this.idLibro;
    this.http.get<any>(urlRicerca).subscribe(
      response => {
        this.libroRicerca = response;
        console.log(this.libroRicerca);
        
      }
    )
  }

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


  

  makePostLibro(): void{
    const url = 'http://localhost:8080/libri/post';
    const dataLibro = {
      titolo: 'Libro1',
      autore: 'autoreProva',
      genere: 'genere',
      annoPubblicazione: '1304-03-10T00:00:00'
    };
    this.http.post(url,this.libro);
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

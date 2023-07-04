import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-prestiti',
  templateUrl: './prestiti.component.html',
  styleUrls: ['./prestiti.component.css']
})
export class PrestitiComponent {
      prestiti: any[] = [];
      prestitoRicerca: any;
      idUtente: number = 0;
      idLibro: number = 0;
      timestampinizio: string = '';

      constructor(private http: HttpClient) { }

      onIdUtenteChange(event: any) {
        if (event && event.target && event.target.value != null)
          this.idUtente = Number(event.target.value);
        console.log(this.idUtente);
      }

      onIdLibroChange(event: any) {
        if (event && event.target && event.target.value != null)
          this.idLibro = Number(event.target.value);
        console.log(this.idLibro);
      }

      onDateChange(event: any) {
        if (event && event.target && event.target.value != null)
          this.timestampinizio = String(event.target.value);
        console.log(this.timestampinizio);
      }


      // queryparams credo sia errato
      getPrestitoById():void{
        let url = 'http://localhost:8080/prestiti/searchPrestito'
        let queryParams = new HttpParams();
        if (this.idUtente) 
          queryParams = queryParams.append('idUtente', this.idUtente.toString());
        if (this.idLibro) 
          queryParams = queryParams.append('idLibro', this.idLibro.toString());
        if (this.timestampinizio) 
          queryParams = queryParams.append('timestampinizio', this.timestampinizio);
        this.http.get<any>('url', {params: queryParams}).subscribe(
          response => {
            this.prestitoRicerca = response;
          });
      }

      getAllPrestiti(): void {
        this.http.get<any[]>('http://localhost:8080/prestiti/getAll', {}).subscribe(
          response => {
            this.prestiti = response;
            console.log(this.prestiti);
          },
          error => {
            console.error(error);
          }
        );
      }


}




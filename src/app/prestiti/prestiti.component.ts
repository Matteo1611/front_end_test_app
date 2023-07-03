import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prestiti',
  templateUrl: './prestiti.component.html',
  styleUrls: ['./prestiti.component.css']
})
export class PrestitiComponent {
      prestiti: any[] = [];

      constructor(private http: HttpClient) { }

      getAllPrestiti(): void {
        this.http.get<any[]>('http://localhost:8080/prestiti/getAll').subscribe(
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




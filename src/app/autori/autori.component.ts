import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.css']
})
export class AutoriComponent {
  autori: any[] = [];

  constructor(private http: HttpClient) { }

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

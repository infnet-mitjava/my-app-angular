import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-qpp';

  pessoas = [];
  //pessoas: Object[] = [
   // {"id": 1,
   //  "nome": "veloso"},
   //  {"id": 2,
   //  "nome": "moura"}     
  //];

  constructor(http: HttpClient){
    http.get("http://localhost:8080/pessoa")
        .subscribe(
          data => {
            console.log(data);
            this.pessoas = data;
          }
        );

  }

}

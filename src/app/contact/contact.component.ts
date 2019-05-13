import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http:Http) { }

  AddProduct(data)
  {
    this.http.post('http://js.vacsera.com/api/final-project',data.value)
    .subscribe(
              response =>{console.log("Success");},
              error =>{console.log("Error");
      });
  }

}

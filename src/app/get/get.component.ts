import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
bookcontent;
  constructor(public activatedRoute: ActivatedRoute,public http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://5d109f54bebb9800143d191d.mockapi.io/books")
    .toPromise()
    .then((response) => {
     
this.bookcontent=response;
    },(error) => {
console.log("error");
    }
    )
  }

}

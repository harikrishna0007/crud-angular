import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
bookForm;
  constructor(public router:Router, public http:HttpClient) { }

  ngOnInit() {
this.bookForm=new FormGroup({
  title: new FormControl(),
  author:new FormControl(),
  coverImage:new FormControl(),
  isbn:new FormControl(),
  description:new FormControl()
})
  }
  submitFormData(){
    this.http.post("https://5d109f54bebb9800143d191d.mockapi.io/books",this.bookForm.value)
    .toPromise()
    .then(response =>{
      this.bookForm=response;
      error=>{
        console.log("error");
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {
  bookForm;
  constructor(public router:Router, public http:HttpClient,public activatedroute:ActivatedRoute) { 
    this.bookForm=new FormGroup({
      title: new FormControl(),
      author:new FormControl(),
      coverImage:new FormControl(),
      description:new FormControl(),
      isbn:new FormControl()

    });
  }

  ngOnInit() {
    this.http.get(`https://5d109f54bebb9800143d191d.mockapi.io/books/${this.activatedroute.snapshot.paramMap.get("id")}`)
    .toPromise()
    .then((response:any) =>{
      this.bookForm.setValue({
        title:response.title,
        author:response.author,
        description:response.description,
        coverImage:response.coverImage
      },
      error=>{
        console.log("error");
      });
    })
  }

  submitFormData(){
    this.http.put(`https://5d109f54bebb9800143d191d.mockapi.io/books/${this.activatedroute.snapshot.paramMap.get("id")}`,
    this.bookForm.value
    )

    .toPromise()
    .then(response =>{
      this.router.navigate(["get"]);
    },error=>{
      console.log("error");
    })
  }


}

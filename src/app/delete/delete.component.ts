import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
Delete;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get("https://5d109f54bebb9800143d191d.mockapi.io/books")
      .toPromise()
      .then((response) => {
        this.Delete = response;
      }, (error) => {
        console.log(error);
      })
  }

  deleteBlog(id) {
    let result = confirm("Are you sure do you want to delete?");
    if (result == true) {
      console.log(id);
      this.http.delete(`https://5d109f54bebb9800143d191d.mockapi.io/books/${id}`)
        .toPromise()
        .then((response) => {
          console.log(response);
          this.loadData();
        },
          (error) => {
            console.log(error);
          })
    }
  }

}

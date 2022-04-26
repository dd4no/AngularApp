import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  public data:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(url).subscribe((res) =>{
      this.data = res;
      // console.log(this.data);
      
    })
  }

}

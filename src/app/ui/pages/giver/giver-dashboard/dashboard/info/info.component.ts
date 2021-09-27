import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let res = this.http.get('http://localhost:3000/giver/');
    res.subscribe((data)=> console.log(data));
    
  }

}

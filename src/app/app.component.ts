import { Component } from '@angular/core';
import {UsersService} from './services/users.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sahm-WebSite';
  // data:any=[]

  //  constructor(private user: UsersService) {
  //   this.user.getData().subscribe(data =>{
  //     console.warn(data)
  //     this.data=data
  //   }) 
  // }
  // name=""
  // constructor (private user:UsersService) {
  //   console.warn(this.user.getData())
  //   this.name=this.user.getData().name;

  // }
  // title1 = new FormControl('');

 
}

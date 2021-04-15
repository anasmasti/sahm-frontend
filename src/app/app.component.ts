import { Component } from '@angular/core';
import {UsersService} from './ui/services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sahm-WebSite';
  // name=""
  // constructor (private user:UsersService) {
  //   console.warn(this.user.getData())
  //   this.name=this.user.getData().name;

  // }

  constructor(private user:UsersService){
    this.user.getData().subscribe(data=>
      console.warn(data))

  }
}

import { Component, Input } from '@angular/core';
import {UsersService} from './services/users.service';
import {FormControl} from '@angular/forms';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sahm-WebSite';
  counter : any;
  title1:any;
constructor(private store: Store<{counter: {counter:number}}>) {}


ngOnInit(): void{
    this.store.select('counter').subscribe(data =>{
     this.counter =  data.counter;
    })
}


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

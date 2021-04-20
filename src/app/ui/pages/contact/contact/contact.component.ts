import { Component, OnInit,Input } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {UsersService} from './../../../../services/users.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // @Input() data:any;
  
  userForm = new FormGroup({
    userId: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(''),
  })

  data:any=[]

  constructor(private user: UsersService) {
   this.user.getData().subscribe(data =>{
     console.warn(data)
     this.data=data
   }) 
 }

  onSubmit(){
    console.warn(this.userForm.value);
  }



  // constructor(private user: UsersService) {
  //   this.user.getData().subscribe(data =>{
  //     console.warn(data)
  //     this.data=data
  //   }) 
  // }

  // updateTitle(){
  //   this.title.setValue('Fast & Furios');
  // }
  // constructor() { }

  ngOnInit(): void {
  }

}

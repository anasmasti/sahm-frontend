import { Component, OnInit,Input } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
// import {UsersService} from '.00/ui/pages/contact/contact/services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() data:any;
  
  userFom = new FormGroup({
    userId: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(''),
  })

  onSubmit(){
    console.warn(this.userFom.value);
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

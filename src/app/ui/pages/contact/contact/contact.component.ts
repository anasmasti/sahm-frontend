import { Component, OnInit,Input } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {UsersService} from './../../../../services/users.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // @Input() data:any;
  
  userForm = new FormGroup({
    email: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    message: new FormControl(),
  })

  data:any=[];
  msgTrue:boolean=false;

  constructor(public user: UsersService) {
   this.user.getContact().subscribe(data =>{
     console.warn(data)
     this.data=data
   }) 
 }

 addNewContact(form:any){
  //  const newFormData = {userIduserId:101,id:2,title:'Fast & Furios',body:'lorem ytyzyutfyuzeuie zoyjsdgkfdhjkeu ysgdqTYdiohd yudgyus  dg ygf gkfj gfeuykfKJFggfv e'};

   //Dynamic data from Form
  //  console.log(form.value.userId);
  //  console.log(form.value.id);
  //  console.log(form.value.title);
  //  console.log(form.value.body);  

   const newFormData={email: form.value.email, firstName: form.value.first_name, lastName: form.value.last_name, message: form.value.message};

   this.user.PostContact(newFormData).subscribe(data=>{ 
     console.log("Tesssssssssssssssssssssssssssssst");
     console.log(data);
     this.msgTrue=true;
    
   })
 }




  // onSubmit(){
  //   console.warn(this.userForm.value);
  // }



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

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  InsertData! : FormGroup;
  ModalId : any ;
  $ : any;
  constructor() { }

  ngOnInit(): void {
     $(".toggle").on("click",function(){
   
    if($(".item").hasClass("active")) {
  
     $(".item").removeClass("active");
     console.log( "click!" );
    }
    else {
     $(".item").addClass("active");
     console.log( "Oops :(!" );
    }
    })


    this.InsertData = new FormGroup({
      'id' : new FormControl(Validators.required),
      'email' : new FormControl(Validators.required , Validators.email),
      'firstName' : new FormControl(Validators.required),
      'lastName' : new FormControl(Validators.required),
      'age' : new FormControl(Validators.required),
      'Phone' : new FormControl(Validators.required),
      'InputPassword' : new FormControl(Validators.required),
    });
  }

  open(){

    console.log("params" , this.ModalId);
    $('#'+this.ModalId).modal('show')

    }
}
   
   console.log( "ready!" );

 
 
  



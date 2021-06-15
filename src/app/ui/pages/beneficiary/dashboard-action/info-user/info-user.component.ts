import { GlobalModalService } from './../../../../../services/global-modal.service';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActionsComponent } from "../actions/actions.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  public id:any = "12"
  InsertData! : FormGroup;
  ModalId : any ;

  constructor( private ModalService : GlobalModalService ) { }

  ngOnInit(): void {

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

  // openDialog(){
  //   this.dialog.open(ActionsComponent)
  // }

  public Modifier(){
    // document.getElementById('name').disabled=false ;
  }

  open(){
  //  let secondModal = document.querySelector('#second-modal > div')
  //  secondModal?.classList.add('show');
  //  console.log();
  console.log("params" , this.ModalId);
  // console.log(secondModal);
  $('#'+this.ModalId).modal('show')
  
   
  //  secondModal?.classList.toggle('active')
   

   
  }


}

import { getCounter } from './../../../../state/counter.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalModalService } from './../../../../../services/global-modal.service';
import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import  * as bootstrap  from "bootstrap";
import {Action} from './../model/Action'

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  actions: Action[] = []
  $ :any;
  Varb = 0;
  tableCurrentCheck : any = [];
  ModalVetement : any = "Vetement"
  ModalATele : any = "ATelephone"
  ModalATran : any = "ATransport"
  ModalFormation : any = "Formation"
  ModalAutre : any = "Autre"
  @ViewChild('products') products!: ElementRef  ;
  @ViewChild('TxtBesoin') TextBesoin!: ElementRef  ;
  @ViewChild('#btn_submit') btnSubmit!: ElementRef  ;
  ActionValidator! : FormGroup;
  vetement!:any;
  size:any=null;
  RadioForm! : FormGroup;
  action!:any;
  actionttttt!:any;
  constructor( private ModalService : GlobalModalService ) { }

  ngOnInit(): void {

    
    this.Test();
    
    // this.ModalService.insertData('test','test','test','test');
    // var numbers = new Array(1, 4, 9); 
    // var length = numbers.push(10); 
    // console.log("new numbers is : " + numbers );  
    // length = numbers.push(20); 
    // console.log("new numbers is : " + numbers );
    
  
    this.RadioForm = new FormGroup({
      product : new FormControl(Validators.required),
    });
    
    this.ActionValidator = new FormGroup({
      'TxtBesoin' : new FormControl(Validators.required),
    });
    
  }

  Unchecked(id:any = null ,  name : any = null){
    
      let Size_Top = document.getElementById('size_Top') as HTMLElement
      let Size_Bottom = document.getElementById('size_Bottom') as HTMLElement
      const test = document.getElementsByName(name) 
        console.log("elementsssss : " , test);
        
      for (let index = 0; index < test.length; index++) {
        const element = test[index] as HTMLInputElement;
        element.checked = false;
      }

      Size_Bottom.style.display = "none" ;
      Size_Top.style.display = "none" ;
          
  }

  open(id : any , idInput : any,button :boolean) {
    
    let Input = document.getElementById(idInput) as HTMLInputElement


    if (Input.checked || button ) {
      
      this.ModalService.openModal(id)

    }

    Input.checked = false;
    this.action = Input.value ;
    
    
    
  }

  MaximumSelection(id :any){



    let CurrentCheckBox = document.getElementById(id) as HTMLInputElement


    if (CurrentCheckBox.checked && this.tableCurrentCheck.length < 3 && !this.tableCurrentCheck.includes(CurrentCheckBox.value) ) {

      // add checked checkbox to array
      this.tableCurrentCheck.push(CurrentCheckBox.value);

      // this.ModalService.openModal(id);

      // CurrentCheckBox.checked = false;

      console.log("table  : " , this.tableCurrentCheck);
      

    }
    else{

      CurrentCheckBox.checked = false

      if (this.tableCurrentCheck.includes(CurrentCheckBox.value)) {

        // Remove the existing value 
        this.tableCurrentCheck.splice(this.tableCurrentCheck.indexOf(CurrentCheckBox.value) , 1)
        console.log("table  : " , this.tableCurrentCheck);
        
      }
      
    }

  }

  Size(id: any , clothing : any){
    let Size_Top = document.getElementById('size_Top') as HTMLElement
    let Size_Bottom = document.getElementById('size_Bottom') as HTMLElement

    let InputE = document.getElementById(id) as HTMLInputElement

    if (InputE.checked) {
      if (clothing == 'top') {
        
        Size_Bottom.style.display = "none" ;
        Size_Top.style.display = "block" ;

      }
      else
      {
          if (clothing == 'bottom') {

            Size_Top.style.display = "none" ;
            Size_Bottom.style.display = "block" ;
            
          }
          
      }
      
    }
    
  }

  ValidateAction(id : any){
    // let Size_Top = document.getElementById('action_Vet') as HTMLInputElement
    // Size_Top.disabled = true;
    const action = document.getElementById(id) as HTMLInputElement;
    action.checked = true ;
    action.disabled = true;
    this.MaximumSelection(id);
    
  }

  TextBesoinValidation(){
    console.log("value" , this.TextBesoin.nativeElement.value);
    
    if (this.TextBesoin.nativeElement.value == "") {
      console.log("Inside if statment");
      
    }
    
  }

  Submit(){

    this.ModalService.insertData(this.action,this.vetement,'En cours',this.size);
    
  }

  Test(){
    const Inputs = document.getElementById('txt') as HTMLInputElement

    // for (let index = 0; index < Inputs.length; index++) {
    //   const element = Inputs[index] as HTMLInputElement  ;

      // console.log("Service :",this.ModalService.UncheckInput());
      // console.log("element :",element.value);
      // if ( element.value == this.ModalService.UncheckInput() ) {
        // element.checked = false;
        // element.disabled = false;
        // console.log(this.ModalService.UncheckInput());
        // console.log(element.value);
        // this.ModalService.UncheckInput()
        
        
      // }
    
    // }

    if (Inputs.value == 'test') {
      console.log('Goooooood');
      
    }

  }


  numbers(){
    const numbers = ['a','a','b','b','b','c','c'];

    for (let index = 0; index < numbers.length; index++) {
      
      let counter = 1;

      for (let j = index; j < numbers.length ; j++) {
        
        if ('a' == numbers[j]) {
          // console.log();
          // numbers.splice(j,1)
          // counter = counter + 1;
          console.log( numbers[index]);
          
          
        }

      }
      // numbers.splice(index,1)
    }

  }


}

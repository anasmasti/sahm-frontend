import { GlobalModalService } from './../../../../../services/global-modal.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import  * as bootstrap  from "bootstrap";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  $ :any;
  Varb = 0;
  tableCurrentCheck : any = [];
  ModalVetement : any = "Vetement"
  ModalATele : any = "ATelephone"
  ModalATran : any = "ATransport"
  ModalFormation : any = "Formation"
  ModalAutre : any = "Autre"
  constructor( private ModalService : GlobalModalService ) { }

  ngOnInit(): void {
  
  
    
  }

  open(id : any , idInput : any,button :boolean) {
    
    let secondModal = document.getElementById(idInput) as HTMLInputElement

    if (secondModal.checked || button ) {
      
      this.ModalService.openModal(id)

    }
  
    
  }

  MaximumSelection(id :any){

    let CurrentCheckBox = document.getElementById(id) as HTMLInputElement

    if (CurrentCheckBox.checked && this.tableCurrentCheck.length < 3 && !this.tableCurrentCheck.includes(CurrentCheckBox.value) ) {

      // add checked checkbox to array
      this.tableCurrentCheck.push(CurrentCheckBox.value)

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

  Test(){
    let classlist = document.getElementById('table')?.classList;
    console.log('class list ::' , classlist);
    
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalModalService  } from 'src/app/services/global-modal.service';
import {Action} from './../model/Action'
// import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-detail-action',
  templateUrl: './detail-action.component.html',
  styleUrls: ['./detail-action.component.css']
})
export class DetailActionComponent implements OnInit {
  
  actions!: Action[];
  $ : any ;
  detailModal : any = "DetailActionModal";
  confirmationModal : any = "ConfirmationModal";
  @ViewChild('ButtonValidate') ButtonValidate!: ElementRef  ;
  DeletedAction!: any ;
  constructor( private ModalService : GlobalModalService ) { }

  ngOnInit(): void {

    this.actions =  this.ModalService.getData();
    
  }

  open(modalid : any) {
      this.ModalService.openModal(modalid);
  }

  changeClass(){
    $("#"+this.ButtonValidate.nativeElement.id).removeClass("btn-valider");
    $("#"+this.ButtonValidate.nativeElement.id).addClass("btn-validée");
    $("#"+this.ButtonValidate.nativeElement.id).attr('title','Validée');
    // $("#"+this.ButtonValidate.nativeElement.id).class;
    console.log("list",this.ButtonValidate.nativeElement.classList[0]);
    


    // console.log(this.myDiv.nativeElement.id);
    
  }

  GetDeletedAction(Action : any){
    this.DeletedAction = Action ;
  }

  deleteItem(){
    this.ModalService.DeleteData(this.DeletedAction);
    this.ModalService.ActionDeleted = this.DeletedAction;
  }

}

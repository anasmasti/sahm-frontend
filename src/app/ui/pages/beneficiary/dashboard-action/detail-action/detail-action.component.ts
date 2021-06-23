import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalModalService  } from 'src/app/services/global-modal.service';
// import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-detail-action',
  templateUrl: './detail-action.component.html',
  styleUrls: ['./detail-action.component.css']
})
export class DetailActionComponent implements OnInit {
  
   HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    
  ];
  $ : any ;
  ModalId : any = "DetailActionModal";
  @ViewChild('ButtonValidate') ButtonValidate!: ElementRef  ;
  constructor( private ModalService : GlobalModalService ) { }

  ngOnInit(): void {
    // $(document).ready(function(){
    //   $('[data-toggle="tooltip"]').tooltip();   
    // });

  }

  open() {
      this.ModalService.openModal(this.ModalId);
  }

  changeClass(){
    $("#"+this.ButtonValidate.nativeElement.id).removeClass("btn-valider");
    $("#"+this.ButtonValidate.nativeElement.id).addClass("btn-validée");
    $("#"+this.ButtonValidate.nativeElement.id).attr('title','Validée');
    // $("#"+this.ButtonValidate.nativeElement.id).class;
    console.log("list",this.ButtonValidate.nativeElement.classList[0]);
    


    // console.log(this.myDiv.nativeElement.id);
    
  }

}

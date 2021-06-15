import { Component, OnInit } from '@angular/core';
import { GlobalModalService } from 'src/app/services/global-modal.service';
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
  constructor( private ModalService : GlobalModalService ) { }

  ngOnInit(): void {
    // $(document).ready(function(){
    //   $('[data-toggle="tooltip"]').tooltip();   
    // });

  }

  open() {
      this.ModalService.openModal(this.ModalId);
  }

}

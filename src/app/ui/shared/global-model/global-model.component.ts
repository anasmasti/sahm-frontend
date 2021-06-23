import { GlobalModalService } from 'src/app/services/global-modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-global-model',
  templateUrl: './global-model.component.html',
  styleUrls: ['./global-model.component.css']
})
export class GlobalModelComponent implements OnInit {

  // InsertData! : FormGroup;
  ModalId: any;
  @Input() id : any
  constructor( private ModalService : GlobalModalService ) { }

  ngOnInit(): void {
    this.ModalId = this.id;
    console.log("params" , this.ModalId);
  }

  close(){
    this.ModalService.closeModal();
  }

}

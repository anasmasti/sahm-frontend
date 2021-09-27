// import { GlobalModalService } from 'src/app/services/global-modal.service';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {Action} from './../ui/pages/beneficiary/dashboard-action/model/Action'


@Injectable({
  providedIn: 'root'
})
export class GlobalModalService {

  actions:Action[]=[];
  deletedAction : Action[] = [];
  ActionDeleted:any;
  constructor(@Inject(DOCUMENT) private document : any) { }

  openModal(id : any){

  // this.document.getElementById('exampleModal')?.classList.add('open')

    $('#'+id).modal('show');

    // console.log(document.getElementById('exampleModal'));
    
  }
  
  closeModal(){

    $('#exampleModal').modal('hide');

  }

  insertData(Intitule:any , Type:any , Etat:any , Size:any){
    this.actions.push({
        Intitule : Intitule,
        Type : Type,
        Etat : Etat,
        Size : Size,
    })
  }

  getData(){
    return this.actions;  
  }

  DeleteData(item:any){
    this.actions.forEach((element , index) => {
      if (item == element.Intitule) {
        this.actions.splice(index,1)
      }
    });
    return item ;
  }

  UncheckInput(element : HTMLInputElement){
    // console.log("from service :",this.deletedAction[0]);
    if (element) {
      
    }
    
    // return action;
  }
}

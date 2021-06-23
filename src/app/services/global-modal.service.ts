import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalModalService {

  constructor(@Inject(DOCUMENT) private document : any,) { }

  openModal(id : any){

  // this.document.getElementById('exampleModal')?.classList.add('open')
    $('#'+id).modal('show');

    // console.log(document.getElementById('exampleModal'));
    
  }
  
  closeModal(){

    $('#exampleModal').modal('hide');

  }
}

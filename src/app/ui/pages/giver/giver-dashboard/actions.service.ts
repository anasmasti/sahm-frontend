import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap'

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  
  //DATA 
  private content = new BehaviorSubject<string>("defailt value test ");
  private actions:Array<string> = [];
  public share = this.content.asObservable();



  //constructeur
  constructor(
    private modalService : NgbModal,
    private http:HttpClient
  ) { }




  //functions
  updateData(text: string){
    this.content.next(text);
  }

  open(content: any , closeResult:any  ) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  chargerAlert(){
    return this.http.get('http://192.168.11.134:3000/actions/alert');
  }
  chargerAction(){
    return this.http.get('http://192.168.11.134:3000/actions/');
  }
  selectedAction(id:any){
    return this.http.get('http://192.168.11.134:3000/actions/'+id);
  }

  getbeneficier(id:any){
    return this.http.get('http://192.168.11.134:3000/users/users/ActionBenef/'+id);
  }

  contribuer(id:any){
    // console.log(id);
    return this.http.put('http://192.168.11.134:3000/actions/contribuer/'+id,{giver:"60c7675e8f244f21d45b24b8" ,etat:"selectionée"});
  }
  valider(id:any){
    // console.log(id);
    return this.http.put('http://192.168.11.134:3000/actions/contribuer/'+id,{giver:"60c7675e8f244f21d45b24b8" ,etat:"validé"});
  }

  getGiverContributions(id:any){
    return this.http.get('http://192.168.11.134:3000/actions/giver/'+id);
  }
  initialiserAction(id:any){
   
    return this.http.put('http://192.168.11.134:3000/actions/renitialiser/'+id,{giver:null ,etat:"initié"});
  }


  getDetailsAction(id:any){
    return this.http.get('http://192.168.11.134:3000/actions/actionBenif/'+id);
  }

  chercherActions(critaire:any){
   
      return this.http.get('http://192.168.11.134:3000/actions/search/'+critaire);  
    
   
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { resolveTypeReferenceDirective } from 'typescript';
import { ActionsService } from '../../actions.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})


export class ActionsComponent implements OnInit {
  closeResult!: string;
  totalLength2: any;
  page2:number=1;
  text ='';
  selectedAction:any ;
  selectedBenif: any;
  afficherRecherch:any = 0;
  afficherDetails:any = 'benif';

  listActions:any;
  constructor(
    private modalService : NgbModal,
    private data: ActionsService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    
    this.data.share.subscribe(x => this.text = x);
   this.chargerActions();
  }


  open(content: any){
    setTimeout(() => {
      this.data.open(content, this.closeResult);
    }, 200);
    
  }
  async chargerActions(){
     await this.data.chargerAction().subscribe((data: any)=> this.listActions = data);
     setTimeout(() => {
      this.totalLength2 = this.listActions.length;
    }, 500);
   }
   selectedaction(id:any){
    //  this.data.selectedAction(id).subscribe((data: any)=> this.selectedAction = data);
    //  this.data.getbeneficier(id).subscribe((data: any)=> this.selectedBenif = data);
    this.data.getDetailsAction(id).subscribe((data: any)=> this.selectedAction = data);
   }
   contribuer(id:any){
    //  let id = this.selectedAction[0]._id;

     
     this.data.contribuer(id).subscribe();
     location.reload();
   }

   displaySearch(){
     if(this.afficherRecherch==0)
     this.afficherRecherch=1;
      else{
        this.afficherRecherch=0;
      }
   }

   displayBenifDetails(){
       this.afficherDetails='benif';
  }
  displayActioonDetails(){
    this.afficherDetails='action';
}
  async chercherActions(critaire:any){
    await this.data.chercherActions(critaire).subscribe((data: any)=> this.listActions = data);
    setTimeout(() => {
      this.totalLength2 = this.listActions.length;
    }, 1000);
  }

 
 
}

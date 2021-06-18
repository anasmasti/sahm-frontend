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


  listActions:any;
  constructor(
    private modalService : NgbModal,
    private data: ActionsService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    
    this.data.share.subscribe(x => this.text = x);
   this.chargerActions();
    setTimeout(() => {
      this.totalLength2 = this.listActions.length;
    }, 2000);
    // res.subscribe((data: any)=> console.log(data) );
    // setTimeout(() => {
    //   console.log(this.listActions);
    // }, 3000); 
   
    
    
  }


  open(content: any){
    setTimeout(() => {
      this.data.open(content, this.closeResult);
    }, 200);
    
  }
  chargerActions(){
    this.data.chargerAction().subscribe((data: any)=> this.listActions = data);
   }
   selectedaction(id:any){
     this.data.selectedAction(id).subscribe((data: any)=> this.selectedAction = data);
     this.data.getbeneficier(id).subscribe((data: any)=> this.selectedBenif = data);
   }
   contribuer(){
     let id = this.selectedAction[0]._id;

     
     this.data.contribuer(id).subscribe();
     location.reload();
   }
 
 
}

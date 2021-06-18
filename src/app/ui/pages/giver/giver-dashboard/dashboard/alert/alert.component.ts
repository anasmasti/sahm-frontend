import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ActionsService } from '../../actions.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  closeResult!: string;
  totalLength: any;
  page:number=1;
  text:any = 'abonnement';
  
  listActions:any;
  selectedAlert:any;
  selectedBenif: any;


  constructor(
   
    private data: ActionsService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
   
    this.chargerActions();
    setTimeout(() => {
      this.totalLength = this.listActions.length;
    }, 2000);
    
  }
  updateText(text: string){
    this.data.updateData(text);
  }
  open(content: any){
    setTimeout(() => {
      this.data.open(content, this.closeResult);
    }, 200);
    
  }
  
  chargerActions(){
   this.data.chargerAlert().subscribe((data: any)=> this.listActions = data);
  }
  selectedalert(id:any){
    this.data.selectedAction(id).subscribe((data: any)=> this.selectedAlert = data);
    this.data.getbeneficier(id).subscribe((data: any)=> this.selectedBenif = data);
  }

  contribuer(id:any){
    this.data.contribuer(id).subscribe();
  }
  reload(){
    window.location.reload();
  }

}

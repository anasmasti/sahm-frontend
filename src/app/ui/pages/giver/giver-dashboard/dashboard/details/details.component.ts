import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../actions.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  totalLength: any;
  page:number=1;
  Contributions:any;
  selectedAction:any;
  selectedBenif: any;
  closeResult!: string;
  afficherDetails:any = 'benif';

  constructor(
    private data: ActionsService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getGiverContributions("60c7675e8f244f21d45b24b8");
    this.totalLength = this.Contributions.length;
    setTimeout(() => {
      console.log("contributions :: "+this.Contributions);
    }, 5000);
    ;
  }
  
  getGiverContributions(id:any){
    this.data.getGiverContributions(id).subscribe((data: any)=> this.Contributions = data);
    
   
  }
  initialiserAction(id:any){
    this.data.initialiserAction(id).subscribe();
  }
  reload(){
    window.location.reload();
  }
  checkLength(){
  
    if(this.totalLength>3) return true;
    else return false;
  }

  valider(id:any){
    this.data.valider(id).subscribe();
  }
  displayBenifDetails(){
    this.afficherDetails='benif';
}
displayActioonDetails(){
 this.afficherDetails='action';
}
  selectedaction(id:any){
    // this.data.selectedAction(id).subscribe((data: any)=> this.selectedAction = data);
    // this.data.getbeneficier(id).subscribe((data: any)=> this.selectedBenif = data);
    this.data.getDetailsAction(id).subscribe((data: any)=> this.selectedAction = data);
  }

  open(content: any){
    setTimeout(() => {
      this.data.open(content, this.closeResult);
    }, 400);
    
  }

}

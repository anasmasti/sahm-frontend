import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  public actions:Array<any> = [
    {nomAction: 'abonnement', src: '../../../../../../../assets/bus.png'},
    {nomAction: 'abonnement', src: '../../../../../../../assets/bus.png'},
    {nomAction: 'vetement', src: '../../../../../../../assets/vtm.png'},
    {nomAction: 'vetement', src: '../../../../../../../assets/vtm.png'},
];
  constructor() { }

  ngOnInit(): void {
  }

}

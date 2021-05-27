import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {

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

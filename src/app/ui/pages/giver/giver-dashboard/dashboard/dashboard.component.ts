import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public actions:Array<any> = [
    {nomAction: 'abonnement', src: '../../../../../../assets/bus.png'},
    {nomAction: 'abonnement', src: '../../../../../../assets/bus.png'},
    {nomAction: 'abonnement', src: '../../../../../../assets/bus.png'},
    {nomAction: 'abonnement', src: '../../../../../../assets/bus.png'},
];
  constructor() { }

  ngOnInit(): void {
  }

}

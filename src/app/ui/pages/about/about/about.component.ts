import {  reset } from './../../../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name="bruce";
  value:any;
  title:any;

  constructor(private store: Store<{counter:{counter: number}}>) { } 

  ngOnInit(): void {
  
  }

  onIncrement(){
    // this.store.dispatch(increment());
  }
  onDecrement() {
    // this.store.dispatch(decrement());
  }
  onReset(){
    this.store.dispatch(reset());
  }

  // onAdd(){
  //   console.log(this.value);
  //   this.store.dispatch(customIncrement({value: this.value}));
  // }

}

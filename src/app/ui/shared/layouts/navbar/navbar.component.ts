import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
     $(".toggle").on("click",function(){
   
    if($(".item").hasClass("active")) {
  
     $(".item").removeClass("active");
     console.log( "click!" );
    }
    else {
     $(".item").addClass("active");
     console.log( "Oops :(!" );
    }
    })
  }
}
   
   console.log( "ready!" );

 
 
  



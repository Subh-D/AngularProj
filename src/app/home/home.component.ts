import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername="Angular Project";
  salary=1000;

isdisabled=false;

colorname="red";
font='40px';

classname='headclass';

stylevalue={"color":"green", "font-size":"30px"}

colors=["Red","Yellow","Green","Blue","White"];

  Functionclick(name:string){
    alert(name)
  }
 

  ngOnInit(): void {
  }

}

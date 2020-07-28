import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }
  msg: String;
  onClickMe() {
    alert("dd");
    this.msg  = "Click Me Button Click";
    
  }

}

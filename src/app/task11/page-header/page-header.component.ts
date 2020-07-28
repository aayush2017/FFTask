import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClickMe() {
    this.valueChange.emit("Button Clicked")
  }

}

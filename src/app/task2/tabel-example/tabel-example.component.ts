import { Component, OnInit, HostListener, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-tabel-example',
  templateUrl: './tabel-example.component.html',
  styleUrls: ['./tabel-example.component.css']
})

export class TabelExampleComponent implements OnInit {
  constructor(private el: ElementRef) { }
  ngOnInit() {
  }
  @HostListener('window:resize') 
  onResize() {
      // call our matchHeight function here
      this.matchHeight(this.el.nativeElement);
  }
  ngAfterViewChecked() {
    // call our matchHeight function here later
    this.matchHeight(this.el.nativeElement);
  }
  matchHeight(parent: HTMLElement) {
    // match height logic here
    // alert(window.innerHeight);
    
    const children = parent.getElementsByClassName("adjustHeight");
    // reset all children height
    Array.from(children).forEach((x: HTMLElement) => {
        x.style.height = String(window.innerHeight - 350)+"px";
    })
  }
}

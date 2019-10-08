import { Component, OnInit, HostListener } from '@angular/core';
declare const window: any;


@Component({
  selector: 'app-core-modules',
  templateUrl: './core-modules.component.html',
  styleUrls: ['./core-modules.component.scss']
})
export class CoreModulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      console.log('You are 100px from the top to bottom');
    } else if (number > 500) {
        console.log('You are 500px from the top to bottom');
    }
  }

}

import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ShoppingCartService } from './core/orders/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:
  [trigger('fade',
  [
    state('void', style({ opacity : 0})),
    transition(':enter',[ animate(300)]),
    transition(':leave',[ animate(500)]),
  ]
)]
})
export class AppComponent implements OnInit {
  title = 'Örder';
  
  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }
 
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky');
     }
  }


}

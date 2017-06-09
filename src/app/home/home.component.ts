import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../shared/animations/router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {
  title: string = "home works!";
  
  constructor() { }

  ngOnInit() {
  }

}

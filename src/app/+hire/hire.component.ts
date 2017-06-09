import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../shared/animations/router.animations';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HireComponent implements OnInit {
  title: string = "hire works!";
  
  constructor() { }

  ngOnInit() {
  }

}

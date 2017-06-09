import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../shared/animations/router.animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PortfolioComponent implements OnInit {
  title: string = "portfolio works!";
  
  constructor() { }

  ngOnInit() {
  }

}

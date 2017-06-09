import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../shared/animations/router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AboutComponent implements OnInit {
  title: string = "about works!";

  constructor() { }

  ngOnInit() {
  }

}

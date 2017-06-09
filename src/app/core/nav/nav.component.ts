import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title: string = "nav works!";
  collapsed: boolean = false;

  items: any[] = [
    { label: "About", link: "/about" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Hire Stefan", link: "/hire" },
    { label: "Admin", link: "/admin" }
  ];

  constructor() { }

  ngOnInit() {
  }

  collapseMenu() {
    this.collapsed = !this.collapsed;
  }

}

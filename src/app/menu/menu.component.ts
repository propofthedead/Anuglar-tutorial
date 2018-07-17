import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menudata=[
    {href: '/home', display: 'Home'},
    {href:'/about',display:'About'},
    {href: '/help',display:'Help'},
    {href:'/contact', display: 'Contact'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

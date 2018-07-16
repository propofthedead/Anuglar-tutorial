import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Foster Stulen';
  sometext='my text';
  names=[
    {name: "Michael",   tag:4},
    {name: "Dan",       tag:3},
    {name: "Anna",      tag:1},
    {name:"Foster",     tag:4},
    {name:"Marcus",     tag:4},
    {name:"Jonathan",   tag:4},
    {name: "Larry",     tag:3}
  ];
  dispName:boolean=true;

  toggle(): void {
    this.dispName=!this.dispName;
  }

  onclick():void{
    this.sometext="this is some text";
  }

}

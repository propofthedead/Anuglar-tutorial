import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Foster Stulen';
  sometext='my text';
  names=[];
  name: string;
  nbr:number;

  add(): void{
    let obj= {
      name: this.name,
      nbr: this.nbr
    };
    this.names.push(obj);
    console.log(this.names);
  }
  dispName:boolean=true;
  aMessage= "Starting Message Losers";
  toggle(): void {
    this.dispName=!this.dispName;
  }

  onclick():void{
    this.sometext="this is some text";
  }

}

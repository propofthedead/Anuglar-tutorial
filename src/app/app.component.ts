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
  amount:number;
  add(): void{
    let obj= {
      name: this.name,
      nbr: this.nbr,
      amount: this.amount
    };
    this.names.push(obj);
    this.name="";
    this.nbr=null;
    this.amount=null;

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

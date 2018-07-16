import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Foster Stulen';
  sometext='my text';
  names: string[]=[
    "Michael","Dan","Anna","Foster","Marcus","Jon","Larry","William"
  ];

  onclick():void{
    this.sometext="this is some text";
  }

}

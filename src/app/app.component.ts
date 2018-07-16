import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.componet.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foster Stulen';
  sometext='my text';

  onclick():void{
    this.sometext="this is some text";
  }

}

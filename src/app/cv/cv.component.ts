import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  name:string ="Foster Stulen";
  address: string="6245 Bridgewater Ct., Mason, OH 45040";
  email: string= "stulenf@yahoo.com";
  phone: string="513-348-9456";

  skills=["C#","SQL Server","EntityFramework","MVC","WebAPI"];
  experiences=[{
    company: "Brooks Brothers",
    position: "Sales Assicate",
    start: "June 30,2017",
    end: ""
  },
  {
    company: "Noodles and Company",
    position: "Clerk",
    start: "June 1, 2015",
    end: "August 19,2016"
  }
];
  constructor() { }

  ngOnInit() {
  }

}

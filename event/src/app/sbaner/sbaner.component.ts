import { Component, OnInit } from '@angular/core';
import { Events } from 'src/models/event';

@Component({
  selector: 'app-sbaner',
  templateUrl: './sbaner.component.html',
  styleUrls: ['./sbaner.component.css']
})
export class SbanerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  kind:string;
  events:Events[]=[

{
 name:"event1",
 image:'assets/image/event22',
 venue:"kochi",
 des: "it is very informative session",
 kind:"seminar",

},

{
  name:"event2",
  image:'assets/image/event22',
  venue:"tvm",
  des: "it is very enternained session",
  kind:"musical",
 
 },

  ]

  getElementbycat(kind:string){
    this.kind=kind;
   }





}

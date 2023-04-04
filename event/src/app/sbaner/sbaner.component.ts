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
 name:"Musical fest2023",
 image:'./assets/images/event55.jpg' ,
 venue:"kochi",
 des: "It is very entertainerd session for you leading top brands are performing",
 desdetail:"It is very entertainerd session for you leading top brands are performing.we plan to conduct we gave full assurence about the coordination and planning ",
 dat:new Date('2023-6-2'),
 kind:"seminar",

},

{
  name:"Debate",
  image:"assets/images/event33.jpg",
  venue:"tvm",
  des: "It is very  informative session.. hou can convey your thoughts",
  desdetail:"It is very entertainerd session for you leading top brands are performing.we plan to conduct we gave full assurence about the coordination and planning ",
  dat:new Date('2023-6-2'),
  kind:"musical",
 
 },
 {
  name:"Seminar",
  image:'assets/images/event22.jpg',
  venue:"Kozhikode",
  des: "It is very informative session.. famous mathematician leads this seminar",
  desdetail:"It is very entertainerd session for you leading top brands are performing.we plan to conduct we gave full assurence about the coordination and planning ",
  dat:new Date('2023-6-2'),
  kind:"musical",
 
 },

  ]

  getElementbycat(kind:string){
    this.kind=kind;
   }





}

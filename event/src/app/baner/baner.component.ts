import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {

  constructor(){

  }
  ngOnInit(){
}
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
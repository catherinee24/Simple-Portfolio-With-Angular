import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  
  public title: string;
  public subtitle: string;
  public email: string;

  
  constructor() { 
    this.title = 'CatellaTech',
    this.subtitle = 'Blockchain developers',
    this.email = 'catellatech@gmail.com'
  }

  ngOnInit(): void {
  }

}

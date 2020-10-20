import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clickCounter :number = 0;

  constructor() { }

  countClick(){
    this.clickCounter +=10;
  }

  ngOnInit(): void {
  }

}

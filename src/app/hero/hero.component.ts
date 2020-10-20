import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  name = new FormControl('');

  info = new FormGroup({
  name: new FormControl('',Validators.required),
  fuel: new FormControl('',Validators.required),
  hp: new FormControl('',Validators.required),
  color:new FormControl('',Validators.required),
  });

  cars = [
    {
      name: "VW Polo",
      fuel: "Diesel",
      hp: 56,
      color: "red"
    },
    {
      name: "Audi Quattro",
      fuel: "Benzin",
      hp: 180,
      color: "black"
    },
    {
      name: "Mercedes S-Class",
      fuel: "Hybrid",
      hp: 150,
      color: "silver"
    } 
  ];
  constructor() {
   }

  ngOnInit(): void {
  }
  onSubmit(){

    if(this.info.valid){
      var a = this.info.value;
      this.cars.push(a);
      this.info.reset();
   }

  }

}

import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  constructor(){

  }
  cities:City[]
  ngOnInit() {
      
  }

}

import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
  providers:[CityService]
})
export class CityComponent implements OnInit {
  constructor(private cityService:CityService){

  }
  cities:City[]=[]
  ngOnInit() {
    this.cityService.getCities().subscribe(data=>{
      this.cities = data
    })
      
  }

}

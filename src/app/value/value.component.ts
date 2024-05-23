import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../models/value';


@Component({
  selector: 'app-value',
  standalone: true,
  imports: [],
  templateUrl: './value.component.html',
  styleUrl: './value.component.css'
})
export class ValueComponent implements OnInit {

  constructor(private httpClient:HttpClient){

  } 
  values:Value[]=[];
  
  ngOnInit(){
    this.getValues()
    
  }

   getValues(){
    return this.httpClient.get<Value[]>("https://localhost:7048/api/Values")
  }
}

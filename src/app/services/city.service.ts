import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import path from 'path';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private httpClient:HttpClient) {
  
 }

 path= "https://localhost:44331/api/";
  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>(this.path+"cities")

  }
}

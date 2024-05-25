import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../models/value';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // HttpClientModule'ü import edin

@Component({
  selector: 'app-value',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // HttpClientModule'ü buraya ekleyin
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})

export class ValueComponent implements OnInit {

  values: Value[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getValues().subscribe(data => {
      this.values = data;
    }, error => {
      console.error('Error fetching values:', error);
    });
  }

  getValues() {
    return this.httpClient.get<Value[]>("https://localhost:7048/api/Values");
  }
}

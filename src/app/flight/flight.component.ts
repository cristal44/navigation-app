import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  origin: string;
  dest: string;
  passengers = 0;
  date: string;
  total = 0;
  isShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(): void {
    this.total = 150 * this.passengers;
    this.isShow = true;
  }

  reset(): void {
    this.origin = '';
    this.dest = '';
    this.passengers = 0;
    this.date = '';
    this.total = null;
    this.isShow = false;
  }

}

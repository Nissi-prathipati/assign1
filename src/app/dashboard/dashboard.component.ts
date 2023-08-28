import { Component, Input } from '@angular/core';
import { SampleService } from '../sample.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @Input() userID: string ;

 
  collection: string[];

  constructor() {
    this.collection = ['Nissi', 'Havi', 'Vini'];
    this.userID= '';
  }
}

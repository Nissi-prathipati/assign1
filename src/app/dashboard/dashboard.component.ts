import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  User=[
    {name:'Navya',age:'20',designation:'GET'},
    {name:'Anu',age:'27',designation:'HR'},   
    {name:'Kavya',age:'25',designation:'RM'}
    ]

  // public getflowers()
  // {
  //   return this.Flowers;
  // }
}

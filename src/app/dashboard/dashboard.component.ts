import { Component } from '@angular/core';
import { SampleService } from '../sample.service';
import { Route, Router } from '@angular/router';

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

    visible=true;
  
    constructor(public hello:SampleService,router:Router)
    {
     
    }
    Mycollection:any;
    onbClick()
    {
      this.Mycollection=this.hello.get();
  
    }
}

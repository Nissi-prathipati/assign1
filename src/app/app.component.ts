import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public hello:SampleService, private router:Router){
    
  }
  title = 'assign1';
  loginbtn()
  {
    this.router.navigate(['login']);
  }
  dashbtn()
  {
    this.router.navigate(['dashboard']);
  }
  
  
}

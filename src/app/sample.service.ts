import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() {}
  humans=[
    {name:'navya',password:'navya123',designation:'GET'},
    {name:'kavya',password:'kavya123',designation:'RM'},
    {name:'Anu',password:'anu123',designation:'HR'}
  ]

  public get()
  {
    return this.humans;
  }
    
  
}

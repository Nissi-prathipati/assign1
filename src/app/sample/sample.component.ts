import { Component } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  samples: any[] = [];
  newTitle: string = '';

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.sampleService.get().subscribe((data) => {
      this.samples = data;
      console.log(this.samples); 
    });
  }
  
  add() {
    if (this.newTitle.trim() !== '') {
      const newsample = { title: this.newTitle, status: 'pending' };
      this.sampleService.add(newsample).subscribe(() => {
        this.newTitle = '';
        this.fetch();
      });
    }
  }

  update(sample: any) {
    sample.status = sample.status === 'pending' ? 'done' : 'pending';
    this.sampleService.update(sample).subscribe(() => {
      this.fetch();
    });
  }

  delete(id: number) {
    this.sampleService.delete(id).subscribe(() => {
      this.fetch();
    });
  }
}

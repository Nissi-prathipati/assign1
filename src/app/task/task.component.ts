import { Component } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

 tasks: string[] = [];
  newTask: string = '';

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.tasks = this.sampleService.getTasks();
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.sampleService.addTask(this.newTask);
      this.tasks = this.sampleService.getTasks();
      this.newTask = '';
}
  }
}

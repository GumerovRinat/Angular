import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from "./task.model"
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({ required: true }) task!: Task
  @Output() complete = new EventEmitter<string>();

  constructor(private tasksService: TasksService){}

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}

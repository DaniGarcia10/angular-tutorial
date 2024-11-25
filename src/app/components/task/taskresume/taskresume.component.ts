import { Component, Input } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskresume',
  standalone: true,
  imports: [CommonModule, TaskresumeComponent],
  templateUrl: './taskresume.component.html',
  styleUrl: './taskresume.component.css'
})

export class TaskresumeComponent {

    @Input()
    taskInput:Task = new Task (1, "Implementar autenticacion", "Configurar autenticacion de usuarios", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-01"), new Date("2024-11-20"), false);
    raiseTaskPriority(taskId:number) {
        return undefined
    }
    lowerTaskPriority(taskId:number){
        return undefined
    }

    changeTaskStatus(taskId:number){
       return undefined
    }
  
}
import { Component } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.models';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from '../resume/resume.component';
import { TaskEvent } from '../../../models/TaskEvent.models';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, ResumeComponent],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  tasklist: Task[] = [
    new Task(1, "Implementar autenticacion", "Configurar autenticacion de usuarios", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-11-01"), new Date("2024-11-20"), false),
      new Task(2, "Diseñar base de datos", "Crear el esquema de la base de datos", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-10-01"), new Date("2024-10-15"), false),
      new Task(3, "Desarrollar API", "Implementar los endpoints necesarios", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-09-01"), new Date("2024-09-30"), false),
      new Task(4, "Crear interfaz de usuario", "Diseñar y desarrollar la interfaz de usuario", TaskPriority.LOW, TaskStatus.COMPLETED, new Date("2024-08-01"), new Date("2024-08-20"), false),
      new Task(5, "Configurar CI/CD", "Implementar integración y despliegue continuo", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-07-01"), new Date("2024-07-15"), false),
      new Task(6, "Escribir documentación", "Documentar el código y las APIs", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-06-01"), new Date("2024-06-10"), false),
      new Task(7, "Realizar pruebas unitarias", "Escribir y ejecutar pruebas unitarias", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-05-01"), new Date("2024-05-20"), false),
      new Task(8, "Optimizar rendimiento", "Mejorar el rendimiento de la aplicación", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-04-01"), new Date("2024-04-15"), false),
      new Task(9, "Implementar seguridad", "Añadir medidas de seguridad a la aplicación", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-03-01"), new Date("2024-03-20"), false),
      new Task(10, "Desplegar en producción", "Realizar el despliegue de la aplicación en producción", TaskPriority.HIGH, TaskStatus.PENDING, new Date("2024-02-01"), new Date("2024-02-10"), false)
  ]

  modifyTask(taskEvent: TaskEvent) {

    switch (taskEvent.action) {
      case "raiseifpriority":
        this.raiseifpriority(taskEvent.taskId);
        break;

      case "deleteTask":
        this.deleteTask(taskEvent.taskId);
        break;

      case "lowerPriority":
        this.lowerPriority(taskEvent.taskId);
        break;

      case "setStatus":
        this.setStatus(taskEvent.taskId);
        break;

      default:
        break;
    }
  }

  setStatus(id: number) {
    for (let index = 0; index < this.tasklist.length; index++) {
      if (this.tasklist[index].id == id) {
        if (this.tasklist[index].status == TaskStatus.COMPLETED) {
          return;
        } else if (this.tasklist[index].status == TaskStatus.IN_PROGRESS) {
          this.tasklist[index].status = TaskStatus.COMPLETED;
        } else {
          this.tasklist[index].status = TaskStatus.IN_PROGRESS;
        }
        break;
      }
    }
  }

  deleteTask(id: number) {
    for (let index = 0; index < this.tasklist.length; index++) {
      if (this.tasklist[index].id == id) {
        this.tasklist[index].isDelete = true;
        break;
      }

    }
  }


  lowerPriority(id: number) {
    for (let index = 0; index < this.tasklist.length; index++) {
      if (this.tasklist[index].id == id) {
        if (this.tasklist[index].priority == TaskPriority.HIGH) {
          this.tasklist[index].priority = TaskPriority.MEDIUM
        } else if (this.tasklist[index].priority == TaskPriority.MEDIUM) {
          this.tasklist[index].priority = TaskPriority.LOW
        }

        break;
      }
    }
  }


  raiseifpriority(id: number) {
    for (let index = 0; index < this.tasklist.length; index++) {
      if (this.tasklist[index].id == id) {
        if (this.tasklist[index].priority == TaskPriority.MEDIUM) {
          this.tasklist[index].priority = TaskPriority.HIGH
        } else if (this.tasklist[index].priority == TaskPriority.LOW) {
          this.tasklist[index].priority = TaskPriority.MEDIUM
        }

        break;
      }
    }
  }
}
import { Component } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  taskList: Task[] = [
    new Task(1, "Implementar autenticacion", "Configurar autenticacion de usuarios", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-11-01"), new Date("2024-11-20"), false),
    new Task(2, "Diseñar base de datos", "Crear el esquema de la base de datos", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-10-01"), new Date("2024-10-15"), false),
    new Task(3, "Desarrollar API", "Implementar los endpoints necesarios", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-09-01"), new Date("2024-09-30"), false),
    new Task(4, "Crear interfaz de usuario", "Diseñar y desarrollar la interfaz de usuario", TaskPriority.LOW, TaskStatus.COMPLETED, new Date("2024-08-01"), new Date("2024-08-20"), true),
    new Task(5, "Configurar CI/CD", "Implementar integración y despliegue continuo", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-07-01"), new Date("2024-07-15"), false),
    new Task(6, "Escribir documentación", "Documentar el código y las APIs", TaskPriority.MEDIUM, TaskStatus.PENDING, new Date("2024-06-01"), new Date("2024-06-10"), false),
    new Task(7, "Realizar pruebas unitarias", "Escribir y ejecutar pruebas unitarias", TaskPriority.HIGH, TaskStatus.IN_PROGRESS, new Date("2024-05-01"), new Date("2024-05-20"), false),
    new Task(8, "Optimizar rendimiento", "Mejorar el rendimiento de la aplicación", TaskPriority.LOW, TaskStatus.COMPLETED, new Date("2024-04-01"), new Date("2024-04-15"), true),
    new Task(9, "Implementar seguridad", "Añadir medidas de seguridad a la aplicación", TaskPriority.HIGH, TaskStatus.COMPLETED, new Date("2024-03-01"), new Date("2024-03-20"), false),
    new Task(10, "Desplegar en producción", "Realizar el despliegue de la aplicación en producción", TaskPriority.LOW, TaskStatus.PENDING, new Date("2024-02-01"), new Date("2024-02-10"), false)
  ];
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {customValidator, customValidatorPriority} from './taskform.validators';
import {Task, TaskStatus, TaskPriority} from '../../../models/task.models';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {

  @Input()
  taskToEdit: Task | null = null; // Tarea a editar (null si estamos añadiendo)
  @Output()
  saveTask = new EventEmitter<Task>(); // Emitir tarea editada
  @Output()
  addTask = new EventEmitter<Task>(); // Emitir nueva tarea

  formTaskEdit: FormGroup

  constructor(formBuilder: FormBuilder) {
    this.formTaskEdit = formBuilder.group({
      'name':['',[Validators.required, Validators.maxLength(50)]],
      'description':['',[Validators.required, Validators.maxLength(255)]],
      'priority':['',[Validators.required, customValidatorPriority()]],
      'expirationDate':['',[Validators.required, customValidator()]]
    });
  }

  onSubmit(): void {
    if (this.formTaskEdit.valid) {
      if (this.taskToEdit) {
        const updatedTask: Task = {
          ...this.taskToEdit,
          ...this.formTaskEdit.value,
          expirationDate: new Date(this.formTaskEdit.value.expirationDate),
        };
        this.saveTask.emit(updatedTask);
      } else {
        const newTask: Task = new Task(
          Math.floor(Math.random() * 1000000),
          this.formTaskEdit.value.name,
          this.formTaskEdit.value.description,
          this.formTaskEdit.value.priority,
          TaskStatus.PENDING,
          new Date(this.formTaskEdit.value.expirationDate),
          new Date(),
          false
        );
        this.addTask.emit(newTask);
      }

      this.formTaskEdit.reset();
    } else {
      console.log(`El formulario tiene errores`);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.formTaskEdit.patchValue({
        name: this.taskToEdit.name,
        description: this.taskToEdit.description,
        priority: this.taskToEdit.priority,
        expirationDate: this.taskToEdit.expirationDate.toISOString().slice(0, 16),
      });
    } else {
      this.formTaskEdit.reset();
    }
  }

}


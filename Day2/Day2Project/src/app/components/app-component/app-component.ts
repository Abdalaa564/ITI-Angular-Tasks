import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITodoItem } from '../../Models/i-todo-item';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-component',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css'
})
export class AppComponent {
  todoList : ITodoItem [] = [];
  newTask:string = '';

      @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;

    ngOnInit(): void {
      const storedTodoList = this.todoList;

    }
  addTask(text: string): void {
    if (text.trim() !== '') {
        const newTodoItem: ITodoItem = {
            id: Date.now(),
            task: text.trim(),
            completed: false
        };
        this.todoList.push(newTodoItem);
        this.todoInputRef.nativeElement.value = '';
    }
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  toggleCompleted(id: number): void {
    const todoItem = this.todoList.find(item => item.id === id);
    if (todoItem) {
        todoItem.completed = !todoItem.completed;
    }
  }

}

import { Component } from '@angular/core';
import { Child } from '../child/child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, Child],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css']
})
export class Parent {
  // messageFromParent = 'Hello from Parent!';
  // childResponse = '';

  // onChildNotify(msg: string) {
  //   this.childResponse = 'Child says: ' + msg;
  todo:string[]=['Angular','TypeScript'];
  onAddTodo(newItem:string){
    this.todo=[newItem,...this.todo];

    //for delete
    
  }
   deleteTodo(index: number) {
    this.todo = this.todo.filter((_, i) => i !== index);
  }
}


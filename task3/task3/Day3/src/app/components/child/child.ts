import { CommonModule } from '@angular/common';
import { Component, EventEmitter,  Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class Child {
  // @Input() message = 'HEsham';
  // @Output() notify = new EventEmitter<string>();

  // sendToParent(msg: string) {
  //   this.notify.emit(msg);
  // }

  @Output() addTodo=new EventEmitter<string>();
  newTask='';
  sendTask(){
    if(!this.newTask.trim())return;
    this.addTodo.emit(this.newTask.trim());
    this.newTask='';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html',
  styleUrls: ['./simple-todo.component.css']
})
export class SimpleTodoComponent implements OnInit {
  title = 'ng-todo';
  value: string = '';
  todolist: any = [];
  complist: any = [];
  incomplist: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  
  create() {
    if (this.value.length > 0) {
      this.todolist = [...this.todolist, {
        key: this.todolist.length,
        text: this.value,
        completed: false,
      }]
      this.value = ''
      this.updateLists();
    }
  }
  delete(todo: any) {

    this.todolist.pop(todo.key - 1);
    this.updateLists();
  }

  toggleStatus(todo: any) {
    // status completion
    todo.completed = !todo.completed;

    this.updateLists();
  }
  updateLists() {
    console.log(this.todolist);
    this.complist = this.todolist.filter((rec: { completed: boolean; }) =>
      rec.completed === true
    )
    this.incomplist = this.todolist.filter((rec: { completed: boolean; }) =>
      rec.completed === false
    )
    console.log(this.incomplist);
    console.log(this.complist);

  }
}

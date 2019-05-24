import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';
  todoList = new Array()
  completedList = new Array()
  todoItem = ""

  addItemToTodoList() {
    console.log("inside addItemToTodoList")
    console.log(this.todoItem)
    if (this.todoItem != "") {
      this.todoList.push(this.todoItem)
      this.todoItem = ""
      console.log(this.todoList)
    }
  }
  addToCompletedList(index) {
    this.completedList.push(this.todoList[index])
    this.todoList.splice(index, 1)
  }
  removeFromCompletedList(index) {
    this.completedList.splice(index, 1)
  }
}

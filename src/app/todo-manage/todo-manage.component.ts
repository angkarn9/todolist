import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-manage',
  templateUrl: './todo-manage.component.html',
  styleUrls: ['./todo-manage.component.scss']
})
export class TodoManageComponent implements OnInit {

  todoList: Todo[];
  todoForm: FormGroup;
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.todoList = [];
    this.todoForm = this.formBuilder.group({
      topic: [''],
      description: ['']
    });
  }

  add() {
    const topic: string = this.todoForm.get('topic').value;
    const description: string = this.todoForm.get('description').value;

    if (topic === '') {
      this.errorMessage = 'topic is require field';
    }
    const todo = new Todo({
      id: 1,
      topic,
      description
    });
    this.todoList.push(todo);
  }
}

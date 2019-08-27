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
  id: number;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.todoList = [];
    this.todoForm = this.formBuilder.group({
      topic: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private genId(): number {
    return this.todoList.length + 1;
  }

  add() {
    const topic: string = this.todoForm.get('topic').value;
    const description: string = this.todoForm.get('description').value;

    if (topic === '') {
      this.errorMessage = 'topic is require field';
    }
    const todo = new Todo({
      id: this.genId(),
      topic,
      description
    });
    this.todoList.push(todo);
    this.todoForm.reset();
  }

  edit(item: Todo) {
    this.todoForm.get('topic').patchValue(item.topic);
    this.todoForm.get('description').patchValue(item.description);
    this.id = item.id;
  }

  update() {
    const todo = this.todoList.find(item => item.id === this.id);
    todo.topic = this.todoForm.get('topic').value;
    todo.description = this.todoForm.get('description').value;
    this.id = undefined;
    this.todoForm.reset();
  }

  remove(id: number) {
    this.todoList.forEach((item: Todo, index: number) => {
      if (id === item.id) {
        this.todoList.splice(index, 1);
      }
    });
  }
}

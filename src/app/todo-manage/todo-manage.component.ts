import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-manage',
  templateUrl: './todo-manage.component.html',
  styleUrls: ['./todo-manage.component.scss']
})
export class TodoManageComponent implements OnInit {

  todoListForm: FormGroup;
  todoList: TodoItem[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.todoListForm = this.formBuilder.group({
      topic: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onAdd() {
    if (this.todoListForm.invalid) {
      return;
    }
    const newItem = new TodoItem({
      id: this.todoList.length + 1,
      topic: this.todoListForm.get('topic').value,
      description: this.todoListForm.get('description').value
    });
    this.todoList.push(newItem);
    this.todoListForm.reset();
  }

  onRemove(id: number) {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }
}



class TodoItem {
  id: number;
  topic: string;
  description: string;

  constructor({id, topic, description}: {id: number, topic: string, description: string}) {
    this.id = id;
    this.topic = topic;
    this.description = description;
  }
}

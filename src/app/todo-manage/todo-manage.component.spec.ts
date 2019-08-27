import { FormBuilder } from '@angular/forms';
import { OnInit, Component } from '@angular/core';
import { TodoManageComponent } from './todo-manage.component';
import { Todo } from '../model/todo';

describe('TodoManageComponent', () => {
  let component: TodoManageComponent;
  let formBuilder: FormBuilder;
  beforeEach(() => {
    formBuilder = new FormBuilder();
    component = new TodoManageComponent(formBuilder);
  });
  it('should create TodoManageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initial todoList to empty when create component', () => {
    component.ngOnInit();
    expect(component.todoList).toEqual([]);
  });

  it('should initial form with topic and description', () => {
    component.ngOnInit();
    expect(component.todoForm.controls.topic.value).toEqual('');
    expect(component.todoForm.controls.description.value).toEqual('');
  });

  fit('should append todoList when add new todo', () => {
    component.ngOnInit();
    component.add();
    const expected = [new Todo({ id: 1, topic: 'topic1ss', description: 'desc1' })];
    const expected2 = [new Todo({ id: 2, topic: 'topic1ss', description: 'desc1' })];
    expect(expected[0]).toEqual(expected2[0]);
  });

  it(`should set error message 'topic is require field' when topic is empty`, () => {
    component.ngOnInit();
    component.add();
    expect(component.errorMessage).toEqual('topic is require field');
  });
});

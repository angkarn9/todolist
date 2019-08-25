import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoManageComponent, TodoItem } from './todo-manage.component';
import { FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoManageComponent', () => {
  let component: TodoManageComponent;
  let fixture: ComponentFixture<TodoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoManageComponent ],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'To do list'`, () => {
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance.title).toEqual('To do list');
  });

  it('should render title in a h1 tag', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('h1').textContent).toContain('To do list');
  });

  it(`should have fromGroup 'todoListForm' and have formControl 'topic' and 'description'`, () => {
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance.todoListForm).not.toBeUndefined();
    expect(componentInstance.todoListForm.controls.topic).not.toBeUndefined();
    expect(componentInstance.todoListForm.controls.description).not.toBeUndefined();
  });

  it('should render empty topic and description', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('#inputTopic').value).toBe('');
    expect(nativeElement.querySelector('#inputDescription').value).toBe('');
  });

  it('should render button add', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('#btnAdd').textContent).toBe('Add');
  });

  it('should render table have 4 columns', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    const expected = `#TopicDescriptionRemove`;
    expect(nativeElement.querySelector('.table > thead > tr').textContent).toBe(expected);
  });

  it('should disable button add when criteria input empty', () => {
    const componentInstance = fixture.debugElement.componentInstance;
    componentInstance.todoListForm.controls.topic.setValue('');
    componentInstance.todoListForm.controls.description.setValue('');
    fixture.detectChanges();

    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('#btnAdd').disabled).toBeTruthy();
  });

  it('should enable button add when criteria input not empty', () => {
    const componentInstance = fixture.debugElement.componentInstance;
    componentInstance.todoListForm.controls.topic.setValue('topic1');
    componentInstance.todoListForm.controls.description.setValue('desc1');
    fixture.detectChanges();

    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('#btnAdd').disabled).toBeFalsy();
  });

  it('should have todoList 1 item when add new 1 item', () => {
    const componentInstance = fixture.debugElement.componentInstance;
    componentInstance.todoList = [];
    componentInstance.todoListForm.controls.topic.setValue('topic1');
    componentInstance.todoListForm.controls.description.setValue('desc1');
    fixture.detectChanges();

    const nativeElement = fixture.debugElement.nativeElement;
    nativeElement.querySelector('#btnAdd').click();
    expect(componentInstance.todoList.length).toBe(1);
  });

  it('should have todoList ids[1,3] when remove item id[2]', () => {
    const componentInstance = fixture.debugElement.componentInstance;
    componentInstance.todoList = [
      new TodoItem({id: 1, topic: 'topic1', description: 'desc1'}),
      new TodoItem({id: 2, topic: 'topic2', description: 'desc2'}),
      new TodoItem({id: 3, topic: 'topic3', description: 'desc3'})
    ];
    fixture.detectChanges();

    const nativeElement = fixture.debugElement.nativeElement;
    nativeElement.querySelector('#btnRemove2').click(2);

    const expected = [
      new TodoItem({id: 1, topic: 'topic1', description: 'desc1'}),
      new TodoItem({id: 3, topic: 'topic3', description: 'desc3'})
    ];
    expect(componentInstance.todoList).toEqual(expected);
  });
});

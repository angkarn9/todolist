import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoManageComponent } from './todo-manage.component';
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
    const debugElement = fixture.debugElement.componentInstance;
    expect(debugElement.title).toEqual('To do list');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('To do list');
  });

  it(`should have fromGroup 'todoListForm' and have formControl 'topic' and 'description'`, () => {
    const debugElement = fixture.debugElement.componentInstance;
    expect(debugElement.todoListForm).not.toBeUndefined();
    expect(debugElement.todoListForm.controls.topic).not.toBeUndefined();
    expect(debugElement.todoListForm.controls.description).not.toBeUndefined();
  });

  it('should render empty topic and description', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#inputTopic').value).toBe('');
    expect(compiled.querySelector('#inputDescription').value).toBe('');
  });

  it('should render button add', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#btnAdd').textContent).toBe('Add');
  });
});

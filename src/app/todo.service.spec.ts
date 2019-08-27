import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from './model/todo';

describe('TodoService', () => {
  let httpClient;
  let service: TodoService;

  beforeEach(() => {
    httpClient = new HttpClient(null);
    service = new TodoService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get', () => {
    spyOn(httpClient, 'get');

    service.getTodoList();
    expect(httpClient.get).toHaveBeenCalledWith('url');
  });

  it('should call http post with body', () => {
    spyOn(httpClient, 'post');
    const todo = new Todo({
      id: 1,
      topic: 't1',
      description: 'd1',
    });
    service.create(todo);
    expect(httpClient.post).toHaveBeenCalledWith('url', todo);
  });
});

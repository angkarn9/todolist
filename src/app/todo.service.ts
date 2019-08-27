import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private httpClient: HttpClient
  ) {

  }
  getTodoList(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('url');
  }

  create(todo: Todo): Observable<any> {
    return this.httpClient.post('url', todo);
  }
}


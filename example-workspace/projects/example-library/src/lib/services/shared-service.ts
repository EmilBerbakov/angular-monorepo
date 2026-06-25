import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { first } from 'rxjs/internal/operators/first';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Service()
export class SharedService {
url = 'https://jsonplaceholder.typicode.com/users';
http = inject(HttpClient);

private _users = new BehaviorSubject<any>([]);
users$ = this._users.asObservable();

getUsers(): void {
  this._users.next([]);
  this.http.get(this.url).pipe(first()).subscribe(x => this._users.next(x));
}
}

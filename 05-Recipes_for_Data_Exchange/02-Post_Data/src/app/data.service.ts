import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  http: Http;
  url: string;
  constructor(http: Http) {
    this.http = http;
    this.url = 'http://127.0.0.1:3000/data';
  }

  getData() {
    const observable = this.http.get(this.url);
    const anotherObservable = observable.map((response) => response.json().data);
    return anotherObservable;
  }

  sendData(name) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers});

    const data = JSON.stringify({name});

    const observable = this.http.post(this.url, data, options);
    const anotherObservable = observable.map((response) => response.json().data);
    return anotherObservable;
  }
}

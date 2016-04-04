import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username" required ngControl="username"/>
      <div *ngIf="!form.controls.username?.valid">
        This field is required!
      </div>
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password" required minlength="10" ngControl="password"/>
      <div *ngIf="form.controls.password?.errors?.required">
        This field is required!
      </div>
      <div *ngIf="form.controls.password?.errors?.minlength">
        This field must have at least 10 characters
      </div>
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  `
})
class MyApp {
  user = {
    username: '',
    password: ''
  };

  constructor() {}

  onSubmit() {
    console.log(this.user);
  }
}

export default MyApp;

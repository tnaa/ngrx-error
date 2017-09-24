import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementAction, DecrementAction, ResetAction } from './state/index';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p>
     Current Count: {{ counter }}
    </p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset Counter</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  counter = 0;

  constructor(private store: Store<any>) {
    store.select('app').subscribe((res: any) => {
      this.title = res.name;
      this.counter = res.counter;
    });
  }

  increment() {
    this.store.dispatch(new IncrementAction());
  }

  decrement() {
    this.store.dispatch(new DecrementAction());
  }

  reset() {
    this.store.dispatch(new ResetAction());
  }
}

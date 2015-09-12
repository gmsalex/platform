import {Component, View, ON_PUSH} from 'angular2/angular2';

@Component({
  selector: 'counter',
  changeDetection: ON_PUSH,
  properties: ['counter', 'increment', 'decrement', 'incrementIfOdd']
})
@View({
  directives: [],
  template: `
  <p>
    Clicked: {{ counter }} times
    <button (^click)="increment()">+</button>
    <button (^click)="decrement()">-</button>
    <button (^click)="incrementIfOdd()">Increment if odd</button>
  </p>
  `
})
export class Counter {
  constructor() {}
}

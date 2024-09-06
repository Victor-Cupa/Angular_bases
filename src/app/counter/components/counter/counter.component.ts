import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counterComponent',
  template: `
  <h1>hola mundo desde el segundo contador</h1>
  <h2> Counter-2: {{counter}}</h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter(0)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{

  public counter:number = 10;

  increaseBy( value:number):void{
    this.counter += value;
  }

  resetCounter(value:number):void{
    this.counter =10;
  }

}





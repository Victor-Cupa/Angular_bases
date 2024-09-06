import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string ='ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} tiene ${this.age} años`
  }

  changeHero(): void {
    this.name = 'spiderman'
  }

  changeAgeHero(): void {
    this.age = 20;
  }
  resetHero ():void{
    this.name = 'ironman';
    this.age = 45;
  }
}

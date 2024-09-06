import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public tittle:string = 'Listado de héroes'

  public heroNames:string[] =['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor','X-men']
  public deleteHero?:string;
  removeLastHero ():void{
    this.deleteHero = this.heroNames.pop();
    
  }

}

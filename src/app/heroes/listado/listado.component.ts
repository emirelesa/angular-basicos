import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    /*if (this.heroes.length > 0)
    {
      this.heroeBorrado = this.heroes.shift() || '';
    }*/
  }
  
}

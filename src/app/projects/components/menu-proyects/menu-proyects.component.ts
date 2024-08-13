import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Proyect } from '../../interfaces/proyects.interfaces';


interface MenuProyects{
  title:string
  route:string
}
@Component({
  selector: 'menu-proyects',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './menu-proyects.component.html',
  styles: ``
})
export class MenuProyectsComponent {

  public menuItems:MenuProyects[]=[
    {
      title:'Sector Minero',
      route:'sector-mineria'
    },
    {
      title:'Sector Construcción',
      route:'sector-construccion'
    },
    {
      title:'Sector Hidrocarburos',
      route:'sector-hidrocarburos'
    },
    {
      title:'Sector Agrícola',
      route:'sector-agricultura'
    }
  ]


}

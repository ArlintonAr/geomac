import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Proyect } from '../../interfaces/proyects.interfaces';

@Component({
  selector: 'app-construction-sector',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './construction-sector.component.html',
  styles: ``
})
export class ConstructionSectorComponent {
  public proyects:Proyect[]=[
    {
      title: 'INSTALACIÓN DE GEOMEMBRANA HDPE POZAS DE IMPERMEABILIZACIÓN DE TANQUES EN REFINERÍA.',
      image: '../../../assets/img/projects/hydrocarbons/img-1.jpg',
      description: 'MODERNIZACIÓN DE LA REFINERÍA TALARA-PETROPERÚ.'
    },
    {
      title: 'INSTALACIÓN DE GEOMEMBRANA HDPE 1.5MM Y TUBERÍAS HDPE DE 2” HASTA 30”.',
      image: '../../../assets/img/projects/hydrocarbons/img-2.jpg',
      description: 'HIDROELÉCTRICA MOLLENDO AREQUIPA – COSAPI S.A.'
    },

  ]

}

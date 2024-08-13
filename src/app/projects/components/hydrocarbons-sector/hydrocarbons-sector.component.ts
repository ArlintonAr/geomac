import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Proyect } from '../../interfaces/proyects.interfaces';

@Component({
  selector: 'app-hydrocarbons-sector',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './hydrocarbons-sector.component.html',
  styles: ``
})
export class HydrocarbonsSectorComponent {

  public proyects:Proyect[]=[
    {
      title: 'INSTALACIÓN DE TUBERÍA HDPE DE 2” A 24”.',
      image: '../../../assets/img/projects/construction/img-1.jpg',
      description: 'AREQUIPA – SAN MARTÍN .'
    },
    {
      title: 'INSTALACIÓN DE GEOMEMBRANA HDPE DE 1.5MM LISA DE RELAVES DE 5,400 M2.',
      image: '../../../assets/img/projects/construction/img-2.jpg',
      description: 'MINERA HUDBAY – COSAPI S.A. PROYECTO CONSTANCIA.'
    },
    {
      title: 'REPARACIÓN DE RESERVORIOS CUMBICO.',
      image: '../../../assets/img/projects/construction/img-3.jpg',
      description: 'CUMBICO.'
    },
  ]
}

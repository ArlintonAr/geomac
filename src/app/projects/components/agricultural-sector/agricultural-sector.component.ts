import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Proyect } from '../../interfaces/proyects.interfaces';

@Component({
  selector: 'app-agricultural-sector',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './agricultural-sector.component.html',
  styles: ``
})
export class AgriculturalSectorComponent {

  public proyects:Proyect[]=[
    {
      title: 'SISTEMA DE RIEGO Y AGUA POTABLE.',
      image: '../../../assets/img/projects/agricultural/img-1.jpg',
      description: ''
    },
    {
      title: 'SOLDADURA GENERAL.',
      image: '../../../assets/img/projects/agricultural/img-2.jpg',
      description: ''
    },
    {
      title: 'REVISTIMIENTO DE RESERVORIOS.',
      image: '../../../assets/img/projects/agricultural/img-3.jpg',
      description: ''
    },
  ]
}

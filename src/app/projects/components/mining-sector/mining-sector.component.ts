import { Component } from '@angular/core';
import { Proyect } from '../../interfaces/proyects.interfaces';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";

@Component({
  selector: 'app-mining-sector',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './mining-sector.component.html',
  styles: ``
})
export class MiningSectorComponent {

  public proyects:Proyect[]=[
    {
      title: 'INSTALACIÓN DE GEOMEMBRANA HDPE 1.5MM Y TUBERÍAS HDPE DE 2” HASTA 30”',
      image: '../../../assets/img/projects/mining/img-1.jpg',
      description: 'UNIDAD MINERA YANACHOCHA – CONSORCIO OBRAINSA – HAUG.'
    },
    {
      title: 'INSTALACIÓN DE GEOMEMBRANA AGRU HDPE DE 1.5MM LISA EN ESPESADOR DE RELAVES DE 5,400 M2.',
      image: '../../../assets/img/projects/mining/img-2.jpg',
      description: 'MINERA HUDBAY – COSAPI S.A. PROYECTO CONSTANCIA.'
    },
    {
      title: 'REVISTIMIENTO DE RESERVORIOS.',
      image: '../../../assets/img/projects/mining/img-3.jpg',
      description: 'COMPAÑÍA DE MINAS BUENAVENTURA U.E.A. ORCOPAMPA.'
    },
  ]
}

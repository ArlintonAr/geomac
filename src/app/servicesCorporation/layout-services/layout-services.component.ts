import { Component } from '@angular/core';
import { TitleForPagesComponent } from "../../common/components/title-for-pages/title-for-pages.component";
import { PaginationComponent } from "../../common/components/pagination/pagination.component";

interface servicesCorporation{
  title:string
  description:string
  image:string
}


@Component({
  selector: 'app-layout-services',
  standalone: true,
  imports: [TitleForPagesComponent, PaginationComponent],
  templateUrl: './layout-services.component.html',
  styles: ``
})
export class LayoutServicesComponent {

  public title:string='Servicios'

  public servicesCompanie:servicesCorporation[]=[
    {
      title:"INSTALACIÓN DE GEOMEMBRANA BITUMINOSA.",
      description:"Instalación profesional de geomembranas bituminosas para impermeabilización.",
      image:"../../../../assets/img/services/img-1.jpg"
    },
    {
      title:"INSTALACIÓN DE GEOMEMBRANA HDPE.",
      description:"Instalación experta de geomembranas HDPE para contención y protección ambiental.",
      image:"../../../../assets/img/services/img-2.jpg"
    },
    {
      title:"INSTALACIÓN DE GEOTEXTIL, GEOMANTA, GEOCOMPUESTO.",
      description:"Colocación de geotextiles, geomantas y geocompuestos para aplicaciones de ingeniería civil.",
      image:"../../../../assets/img/services/img-3.jpg"
    },
    {
      title:"INSTALACIÓN DE GEONET, GEOMALLAS, GEOCELDAS, GCL.",
      description:"Instalación de geonets, geomallas, geoceldas y GCL para refuerzo y drenaje.",
      image:"../../../../assets/img/services/img-4.jpg"
    },
    {
      title:"SOLDADURA DE TUBERIA HDPE.",
      description:"Servicios de soldadura de tuberías HDPE para sistemas de conducción de fluidos.",
      image:"../../../../assets/img/services/img-5.jpg"
    },
    {
      title:"CONSTRUCCIÓN DE CANALES PERIMETRALES.",
      description:"Construcción de canales perimetrales para manejo y control de agua.",
      image:"../../../../assets/img/services/img-6.jpg"
    },
    {
      title:"CONSTRUCCIÓN DE CERCOS PERIMÉTRICOS.",
      description:"Construcción de cercos perimétricos para seguridad y delimitación de propiedades.",
      image:"../../../../assets/img/services/img-7.jpg"
    },
    {
      title:"SOLDADURA GENERAL.",
      description:"Servicios de soldadura general para diversas aplicaciones industriales y de construcción.",
      image:"../../../../assets/img/services/img-8.jpg"
    },
    {
      title:"REVISTIMIENTO DE RESERVORIOS.",
      description:"Aplicación de revestimientos para la impermeabilización de reservorios.",
      image:"../../../../assets/img/services/img-9.jpg"
    },
    {
      title:"INSTALACIÓN DE TUBERIAS HDPE.",
      description:"Instalación de tuberías HDPE para sistemas de agua, desagüe y otros usos.",
      image:"../../../../assets/img/services/img-10.jpg"
    },
    {
      title:"ELABORACIÓN DE BANDEJAS ANTIDERRAME PARA GRUPOS ELECTROGENOS Y OTROS FINES.",
      description:"Fabricación de bandejas antiderrame para equipos generadores y otros usos industriales.",
      image:"../../../../assets/img/services/img-11.jpg"
    },

  ]


}

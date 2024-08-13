import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

interface AlbumProjects{
  name:string
  description:string
  photo:string
}


@Component({
  selector: 'recent-prohects',
  standalone: true,
  imports: [],
  templateUrl: './recent-prohects.component.html',
  styles: ``
})
export class RecentProhectsComponent {


  public albumProjects:AlbumProjects[]=[
    {name:'SISTEMA DE DESAGUE Y PETAR',
      description:'UNIDAD MINERA SAN GABRIEL',
      photo:'../assets/img/albumProjects/one.jpg'},
    {name:'SISTEMA DE RIEGO Y AGUA POTABLE',
      description:'UNIDAD MINERA LA ENCAÑADA',
      photo:'../assets/img/albumProjects/two.jpg'},
    {name:'REPARACIÓN DE RESERVORIOS',
      description:'CUMBICO',
      photo:'../assets/img/albumProjects/three.jpg'},
    {name:'REPARACIÓN DE PRESA DE RELAVES R4 - R4A Y DESMONTERA PROMETIDA',
      description:'COMPAÑÍA DE MINAS BUENAVENTURA U.E.A. ORCOPAMPA',
      photo:'../assets/img/albumProjects/four.jpg'},
    {name:'INSTALACIÓN DE GEOMEMBRANA HDPE POZAS DE IMPERMEABILIZACIÓN DE TANQUES EN REFINERÍA',
      description:'MODERNIZACIÓN DE LA REFINERÍA TALARA-PETROPERÚ',
      photo:'../assets/img/albumProjects/five.jpg'},
    {name:'INSTALACIÓN DE GEOMEMBRANA HDPE 1.5MM Y TUBERÍAS HDPE DE 2” HASTA 30”',
      description:'UNIDAD MINERA YANACHOCHA - CONSORCIO OBRAINSA - HAUG',
      photo:'../assets/img/albumProjects/six.jpg'}
  ]


  @ViewChild('bar') bar!:ElementRef
  @ViewChild('contentbar') contentBar!:ElementRef





}

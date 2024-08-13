import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuProducts{
  title:string
  route:string
}

@Component({
  selector: 'menu-products',
  standalone: true,
  imports: [
    RouterLink,

  ],
  templateUrl: './menu-products.component.html',
  styles: ``
})
export class MenuProductsComponent {

  public menuItems:MenuProducts[]=[
    {title:'VENTA Y FABRICACIÓN DE PROTECTORES DE FIBRA DE VIDRIO PARA CAÑON DE EXTRUSORAS ',route:'venta-fabricacion-de-fibra-vidrio'},
    {title:'VENTA DE ACCESORIOS DE HDPE TEE YEE CODOS INYECTADOS',route:'venta-hdpe-tee-yee'},
    {title:'VENTA DE TUBERIA HDPE GEOMEMBRANA VALVULAS MARIPOSA STUBEN BAQUING RIN',route:'venta-fabricacion-tuberia-hdpe'},
    {title:'VENTA DE CORDÓN DE APORTE PARA GEOMEMBRANA HDPE NOMINAL DE 5MM (SOLDADURA HDPE)',route:'venta-fabricacion-cordon-geomenbrana'},
    {title:'ALQUILER DE GRUPO ELECTRÓGENO',route:'alquiler-grupo-electrogeno'},
    {title:'ALQUILER DE CUÑA',route:'alquiler-de-cuña'},
    {title:'ALQUILER DE EXTRUSORAS',route:'alquiler-de-extrusoras'},
    {title:'ALQUILER DE TERMOFUSORA HIDRÁULICA',route:'alquiler-termofusora-hidráulica'},
    {title:'ALQUILER DE TERMOFUSORA MANUAL',route:'alquiler-termofusora-manual'},
    {title:'ALQUILER DE EQUIPOS PARA CONTROL DE CALIDAD',route:'alquiler-equipos-control-calidad'}
  ]

}

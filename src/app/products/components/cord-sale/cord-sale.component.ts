import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";

@Component({
  selector: 'product-cord-sale',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './cord-sale.component.html',
  styles: ``
})
export class CordSaleComponent {

  public products:Product[]=[
    {
      title: 'Cordón de aporte para Geomembrana HDPE nominal de 5mm(Soldadura HDPE)',
      image: '../../../assets/img/shop/cords/img-1.jpg',
      description: ''
    },
    {
      title: 'Cordón de aporte para Geomembrana LLDPE nominal de 5mm (Soldadura LLDPE)',
      image: '../../../assets/img/shop/cords/img-2.jpg',
      description: ''
    },
    {
      title: 'Venta de Geomembrana con espesores 0.50mm, 0.75mm, 1.0mm, 1.50mm, 2.00mm',
      image: '../../../assets/img/shop/cords/img-3.jpg',
      description: ''
    },
    {
      title: 'Venta de Geomembrana',
      image: '../../../assets/img/shop/cords/img-4.jpg',
      description: ''
    },
  ]
}

import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";

@Component({
  selector: 'product-cradle-rental',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './cradle-rental.component.html',
  styles: ``
})
export class CradleRentalComponent {
  public products:Product[]=[
    {
      title: 'Cuña Térmica',
      image: '../../../assets/img/shop/cuña/img-1.jpg',
      description: ''
    },
    {
      title: 'Cuña Térmica',
      image: '../../../assets/img/shop/cuña/img-2.jpg',
      description: ''
    },
    {
      title: 'Repuestos en general para Cuñas, extrusoras ',
      image: '../../../assets/img/shop/cuña/img-3.jpg',
      description: ''
    },
    {
      title: 'Repuestos en general para Cuñas, extrusoras ',
      image: '../../../assets/img/shop/cuña/img-4.jpg',
      description: ''
    },


  ]

}

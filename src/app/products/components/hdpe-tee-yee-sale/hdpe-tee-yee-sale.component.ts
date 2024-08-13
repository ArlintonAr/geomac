import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { PaginationComponent } from '../../../common/components/pagination/pagination.component';

@Component({
  selector: 'product-hdpe-tee-yee-sale',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './hdpe-tee-yee-sale.component.html',
  styles: ``
})
export class HdpeTeeYeeSaleComponent {
  public products:Product[]=[
    {
      title: 'Accesorios De Hdpe Tee Yee Codos Inyectados',
      image: '../../../assets/img/shop/hdpe/img-1.jpg',
      description: ''
    },
    {
      title: 'Accesorios De Hdpe Tee Yee Codos Inyectados',
      image: '../../../assets/img/shop/hdpe/img-2.jpg',
      description: ''
    },
    {
      title: 'Accesorios De Hdpe Tee Yee Codos Inyectados',
      image: '../../../assets/img/shop/hdpe/img-3.jpg',
      description: ''
    },
  ]
}

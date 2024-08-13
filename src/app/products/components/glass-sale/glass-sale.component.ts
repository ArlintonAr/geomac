import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Product } from '../../interfaces/product.interface';



@Component({
  selector: 'product-glass-sale',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './glass-sale.component.html',
  styles: ``
})
export class GlassSaleComponent {

  public products: Product[] = [
    {
      title: 'Protectores de Fibra de Vidrio para Cañón de Extrusoras',
      image: '../../../assets/img/shop/fibra/img-1.jpg',
      description: ''
    },
    {
      title: 'Protectores de Fibra de Vidrio para Cañon de Extrusoras',
      image: '../../../assets/img/shop/fibra/img-2.jpg',
      description: ''
    },
    {
      title: 'Protectores de Fibra de Vidrio para Cañón de Extrusoras',
      image: '../../../assets/img/shop/fibra/img-3.jpg',
      description: ''
    },
  ]
}

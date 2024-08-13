import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'product-extruders-rental',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './extruders-rental.component.html',
  styles: ``
})
export class ExtrudersRentalComponent {
  public products:Product[]=[
    {
      title: 'Extrusora',
      image: '../../../assets/img/shop/extrusoras/img-1.jpg',
      description: ''
    },
    {
      title: 'Extrusora',
      image: '../../../assets/img/shop/extrusoras/img-2.jpg',
      description: ''
    },
    {
      title: 'Extrusora',
      image: '../../../assets/img/shop/extrusoras/img-3.jpg',
      description: ''
    },



  ]

}

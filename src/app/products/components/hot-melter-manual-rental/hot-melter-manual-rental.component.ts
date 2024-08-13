import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'product-hot-melter-manual-rental',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './hot-melter-manual-rental.component.html',
  styles: ``
})
export class HotMelterManualRentalComponent {
  public products:Product[]=[
    {
      title: 'Termofusora Manual',
      image: '../../../assets/img/shop/termoManual/img-1.jpg',
      description: ''
    },
    {
      title: 'Termofusora Manual',
      image: '../../../assets/img/shop/termoManual/img-2.jpg',
      description: ''
    },
    {
      title: 'Termofusora Manual',
      image: '../../../assets/img/shop/termoManual/img-3.jpg',
      description: ''
    },

  ]

}

import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";

@Component({
  selector: 'product-hot-melter-hydraulic-rental',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './hot-melter-hydraulic-rental.component.html',
  styles: ``
})
export class HotMelterHydraulicRentalComponent {
  public products:Product[]=[
    {
      title: 'Termofusora Hidráulica',
      image: '../../../assets/img/shop/termoHid/img-1.jpg',
      description: ''
    },
    {
      title: 'Termofusora Hidráulica',
      image: '../../../assets/img/shop/termoHid/img-2.jpg',
      description: ''
    },
    {
      title: 'Termofusora Hidráulica',
      image: '../../../assets/img/shop/termoHid/img-3.jpg',
      description: ''
    },
    {
      title: 'Termofusora Hidráulica',
      image: '../../../assets/img/shop/termoHid/img-4.jpg',
      description: ''
    },
    {
      title: 'Termofusora Hidráulica',
      image: '../../../assets/img/shop/termoHid/img-5.jpg',
      description: ''
    },

  ]

}

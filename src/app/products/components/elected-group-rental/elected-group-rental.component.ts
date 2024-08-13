import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'product-elected-group-rental',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './elected-group-rental.component.html',
  styles: ``
})
export class ElectedGroupRentalComponent {
  public products:Product[]=[
    {
      title: 'Grupo Electrógeno CAT',
      image: '../../../assets/img/shop/group-elec/img-1.jpg',
      description: ''
    },
    {
      title: 'Grupo Electrógeno OLYMPIAN',
      image: '../../../assets/img/shop/group-elec/img-2.jpg',
      description: ''
    },
    {
      title: 'Generador Eléctrico Estacionario Encapsulado insonoro',
      image: '../../../assets/img/shop/group-elec/img-3.jpg',
      description: ''
    },

  ]

}

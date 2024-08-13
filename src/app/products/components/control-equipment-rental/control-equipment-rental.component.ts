import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'product-control-equipment-rental',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './control-equipment-rental.component.html',
  styles: ``
})
export class ControlEquipmentRentalComponent {
  public products:Product[]=[
    {
      title: 'Vernier Digital',
      image: '../../../assets/img/shop/control/img-1.jpg',
      description: ''
    },
    {
      title: 'Termohigrometro Digital',
      image: '../../../assets/img/shop/control/img-2.jpg',
      description: ''
    },
    {
      title: 'Pirometro Laser',
      image: '../../../assets/img/shop/control/img-3.jpg',
      description: ''
    },
    {
      title: 'Cuponera',
      image: '../../../assets/img/shop/control/img-4.jpg',
      description: ''
    },
    {
      title: 'Probador de Chispa',
      image: '../../../assets/img/shop/control/img-5.jpg',
      description: ''
    },
    {
      title: 'Cuponera',
      image: '../../../assets/img/shop/control/img-6.jpg',
      description: ''
    },
    {
      title: 'Manómetro para Probador de Aire',
      image: '../../../assets/img/shop/control/img-7.jpg',
      description: ''
    },
    {
      title: 'Odómetro Digital',
      image: '../../../assets/img/shop/control/img-8.jpg',
      description: ''
    },
    {
      title: 'Tensiómetro',
      image: '../../../assets/img/shop/control/img-9.jpg',
      description: ''
    },
    {
      title: 'Tensiómetro',
      image: '../../../assets/img/shop/control/img-10.jpg',
      description: ''
    },
    {
      title: 'Anemómetro',
      image: '../../../assets/img/shop/control/img-11.jpg',
      description: ''
    },
    {
      title: 'Vacum Test',
      image: '../../../assets/img/shop/control/img-12.jpg',
      description: ''
    },

  ]

}

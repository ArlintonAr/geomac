import { Component } from '@angular/core';
import { PaginationComponent } from "../../../common/components/pagination/pagination.component";
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'product-pipeline-sale',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './pipeline-sale.component.html',
  styles: ``
})
export class PipelineSaleComponent {
  public products:Product[]=[
    {
      title: 'Venta e instalación de manguera HDPE de 2” 3” 4”',
      image: '../../../assets/img/shop/pipeline/img-1.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de Tubería hdpe de 4” 6”- 24” por 6m y 12m',
      image: '../../../assets/img/shop/pipeline/img-2.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de Tubería hdpe de 4” 6”- 24” por 6m y 12m',
      image: '../../../assets/img/shop/pipeline/img-3.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de válvulas mariposa',
      image: '../../../assets/img/shop/pipeline/img-4.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de válvulas mariposa',
      image: '../../../assets/img/shop/pipeline/img-5.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de válvulas mariposa',
      image: '../../../assets/img/shop/pipeline/img-6.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de Baking Ring Bridas de HDPE y metálicas en los diferentes SDR',
      image: '../../../assets/img/shop/pipeline/img-7.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de Baking Ring Bridas de HDPE y metálicas en los diferentes SDR',
      image: '../../../assets/img/shop/pipeline/img-8.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de Stuben de 2" a 24”',
      image: '../../../assets/img/shop/pipeline/img-9.jpg',
      description: ''
    },
    {
      title: 'Venta e instalación de Stuben de 2" a 24”',
      image: '../../../assets/img/shop/pipeline/img-10.jpg',
      description: ''
    },

  ]
}

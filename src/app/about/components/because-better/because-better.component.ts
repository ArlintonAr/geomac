import { Component } from '@angular/core';


interface BestServices{
  title:string
  description:string
  icon:string
}

@Component({
  selector: 'because-better',
  standalone: true,
  imports: [],
  templateUrl: './because-better.component.html',
  styles: ``
})
export class BecauseBetterComponent {

  public bestServices:BestServices[]=[
    {title:'Ingenieros Expertos',
      description:'Contamos con profesionales de altamente capacitados, para garantizar calidad en el proyecto',
      icon:`<i class="fa-solid fa-helmet-safety"></i>`},
    {title:'Atención al cliente',
      description:'Contamos con profesionales capacitados para dar la confianza al cliente en la ejecución de los proyectos.',
      icon:`<i class="fa-solid fa-phone"></i>`},
    {title:'Entrega a tiempo',
      description:'Contamos con profesionales de altamente capacitados, para garantizar la entrega de los proyectos al tiempo establecido.',
      icon:`<i class="fa-solid fa-clock"></i>`},

  ]


}

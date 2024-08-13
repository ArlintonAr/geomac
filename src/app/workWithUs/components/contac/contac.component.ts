import { Component } from '@angular/core';

interface ItemDetail{
  date:string
}

interface Contact{
  name:string
  itemDetail:ItemDetail[]
  icon:string
}

@Component({
  selector: 'workWithUs-contac',
  standalone: true,
  imports: [],
  templateUrl: './contac.component.html',
  styles: ``
})
export class ContacComponent {

  public contacts:Contact[]=[
    {
      name:'Celular',
      itemDetail:[
        {date:'989946057'},
        {date:'949191079'},
        {date:'963191073'},
      ],
      icon:`<i class="fa-solid fa-phone"></i>`
    },
    {
      name:'Correo electrónico - Proyectos y Ventas',
      itemDetail:[
        {date:'ingenieriageomac@gmail.com'},
        {date:'ingenieria@geomaceirl.com'},
        {date:'ventas@geomaceirl.com'},
      ],
      icon:`<i class="fa-solid fa-envelope"></i>`
    },
    {
      name:'Correo electrónico - Reclutamiento',
      itemDetail:[
        {date:'reclutamiento@geomaceirl.com'},

      ],
      icon:`<i class="fa-solid fa-envelope"></i>`
    },
    {
      name:'Dirección de Oficinas',
      itemDetail:[
        {date:'HUAMBOCANCHA ALTA K.M 7.5'},

      ],
      icon:`<i class="fa-solid fa-location-dot"></i>`
    },
    {
      name:'Dirección de Almacen',
      itemDetail:[
        {date:'HUAYRAMPONGO GRANDE K.M 3'},

      ],
      icon:`<i class="fa-solid fa-location-dot"></i>`
    },
  ]

}

import { Component } from '@angular/core';

interface InfoEmployee {
  name: string
  position: string
  photo: string
}


@Component({
  selector: 'album-team',
  standalone: true,
  imports: [],
  templateUrl: './album-team.component.html',
  styles: ``
})
export class AlbumTeamComponent {

  public employees: InfoEmployee[] = [
    {
      name: 'Edgardo de la Cruz Cueva',
      position: 'Asesor jurídico',
      photo: '../../../../assets/img/team/img-2.jpg'
    },
    {
      name: 'Erika Fiorella Perez Julcamoro',
      position: 'Jefe de Administracion y Finanzas',
      photo: '../../../../assets/img/team/img-3.jpg'
    },
    {
      name: 'Genaro de la Cruz Valencia',
      position: 'Presidente',
      photo: '../../../../assets/img/team/img-1.jpg'
    },


  ]

  rotateElementArray(arr: InfoEmployee[]) {
    arr.push(arr.shift() as InfoEmployee)
    return arr
  }

  changeForButton(){
    this.rotateElementArray(this.employees)

  }

}

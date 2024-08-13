import { Component } from '@angular/core';


interface AlbumCompanies{
  name?:string
  route:string
}

@Component({
  selector: 'home-companies',
  standalone: true,
  imports: [],
  templateUrl: './companies.component.html',
  styles: ``
})
export class CompaniesComponent {
  public photosAlbum:AlbumCompanies[]=[
    {name:'',route:'../assets/img/albumCompanies/img-1.png'},
    {name:'',route:'../assets/img/albumCompanies/img-2.png'},
    {name:'',route:'../assets/img/albumCompanies/img-3.png'},
    {name:'',route:'../assets/img/albumCompanies/img-4.png'},
    {name:'',route:'../assets/img/albumCompanies/img-5.png'},
    {name:'',route:'../assets/img/albumCompanies/img-6.png'},
    {name:'',route:'../assets/img/albumCompanies/img-7.png'},
    {name:'',route:'../assets/img/albumCompanies/img-8.png'},
    {name:'',route:'../assets/img/albumCompanies/img-9.png'}
  ]

  constructor() {
    this.addShowElement()

  }

  addShowElement() {
    let i = 2
    setInterval(() => {
      this.rotateElementArray(this.photosAlbum)
      this.photosAlbum[i]
    }, 5000)
    i++
  }

  rotateElementArray(arr: AlbumCompanies[]) {
    arr.push(arr.shift() as AlbumCompanies)
    return arr
  }

  //implementar mejor
  dragCompanie(event:MouseEvent){
    this.rotateElementArray(this.photosAlbum)
  }

}

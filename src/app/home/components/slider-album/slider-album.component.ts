import { Component } from '@angular/core';

interface Album {
  title?: string,
  description?: string,
  route: string

}

@Component({
  selector: 'slider-album',
  standalone: true,
  imports: [],
  templateUrl: './slider-album.component.html',
  styles: ``
})
export class SliderAlbumComponent {

  public photosAlmbum: Album[] = [
    {
      title: `Servicio de  <span class="text-geo-yellow">Instalación de Geosinteticos</span> en los sectores Agricolas, Industriales, Pesqueros y Mineros`,
      description: 'Revestimiento de Geomembrana, Soldadura por aire caliente,Instalación de tuberia HDPE, Termofusión, Extrusión, Fusión y Control de Calidad.',
      route: '../../../../assets/img/album/one.jpg'
    },
    { title: `Revestimiento con <span class="text-geo-yellow">Geomembrana</span> de Pozas, Taludes, Pads`,
      description: 'Instalación y venta de geomembrana y tubería hdpe.',
      route: '../../../../assets/img/album/two.jpg' },
    { title: `Servicio de <span class="text-geo-yellow">Instalación de Geosinteticos</span> en los sectores Agricolas, Industriales, Pesqueros y Mineros`,
      description: 'Revestimiento de Geomembrana, Soldadura por aire caliente, Instalación de tuberia HDPE, Termofusión, Extrusión, Fusión y Control de Calidad.',
      route: '../../../../assets/img/album/three.jpg' },
    { title: `Servicio de <span class="text-geo-yellow">Instalación de Geosinteticos</span> en los sectores Agricolas, Industriales, Pesqueros y Mineros`,
      description: 'Revestimiento de Geomembrana, Soldadura por aire caliente, Instalación de tuberia HDPE, Termofusión, Extrusión, Fusión y Control de Calidad.',
      route: '../../../../assets/img/album/four.jpg' },
    { title: `<span class="text-geo-yellow">Proyectos </span>Recientes`, description: 'Dejanos mostrate un poco de nuestros ultimos proyectos.', route: '../../../../assets/img/album/five.jpg' },
  ]

  public photoShow: Album = this.photosAlmbum[0]

 // public arrayNumbers: string[] = ['1', '2', '3', '4', '5']

  constructor() {
    this.addShowElement()

  }

  addShowElement() {
    let i = 2
    setInterval(() => {
      this.rotateElementArray(this.photosAlmbum)
      this.photoShow = this.photosAlmbum[i]
    }, 7000)
    i++
  }

  rotateElementArray(arr: Album[]) {
    arr.push(arr.shift() as Album)
    return arr
  }

  changeForButton(){
    this.rotateElementArray(this.photosAlmbum)
    this.photoShow=this.photosAlmbum[0]
  }
}

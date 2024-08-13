import { Component } from '@angular/core';
import { TitleForPagesComponent } from "../../common/components/title-for-pages/title-for-pages.component";
import { MenuProyectsComponent } from "../components/menu-proyects/menu-proyects.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-proyects-layouts',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleForPagesComponent,
    MenuProyectsComponent,
  ],
  templateUrl: './proyects-layouts.component.html',
  styles: ``
})
export class ProyectsLayoutsComponent {

  public title:string='Proyectos'
}

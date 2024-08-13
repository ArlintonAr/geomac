import { Component } from '@angular/core';
import { TitleForPagesComponent } from "../../common/components/title-for-pages/title-for-pages.component";
import { MenuProductsComponent } from "../components/menu-products/menu-products.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts-products',
  standalone: true,
  imports: [
    RouterOutlet,

    TitleForPagesComponent,
    MenuProductsComponent
  ],
  templateUrl: './layouts-products.component.html',
  styles: ``
})
export class LayoutsProductsComponent {

  public title:string='Productos'

}

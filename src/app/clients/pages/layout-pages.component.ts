import { Component } from '@angular/core';
import { TitleForPagesComponent } from "../../common/components/title-for-pages/title-for-pages.component";
import { CompaniesComponent } from "../../home/components/companies/companies.component";

@Component({
  selector: 'app-layout-pages',
  standalone: true,
  imports: [TitleForPagesComponent, CompaniesComponent],
  templateUrl: './layout-pages.component.html',
  styles: ``
})
export class LayoutPagesComponent {

  public title:string='Clientes'

}

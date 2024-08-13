import { Component } from '@angular/core';
import { TitleForPagesComponent } from "../../common/components/title-for-pages/title-for-pages.component";
import { ContacComponent } from "../components/contac/contac.component";
import { FormContactComponent } from "../components/form-contact/form-contact.component";

@Component({
  selector: 'app-layout-work-with',
  standalone: true,
  imports: [TitleForPagesComponent, ContacComponent, FormContactComponent],
  templateUrl: './layout-work-with.component.html',
  styles: ``
})
export class LayoutWorkWithComponent {

  public title:string='Trabaja con Nosotros'

}

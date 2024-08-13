import { Component } from '@angular/core';
import { SliderAlbumComponent } from "../components/slider-album/slider-album.component";
import { RecentProhectsComponent } from "../components/recent-prohects/recent-prohects.component";
import { CompaniesComponent } from "../components/companies/companies.component";

@Component({
  selector: 'home-page-layout',
  standalone: true,
  imports: [SliderAlbumComponent, RecentProhectsComponent, CompaniesComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutHomeComponent {

}

import { Component, Input, Output } from '@angular/core';
import { TitleForPagesComponent } from "../../../common/components/title-for-pages/title-for-pages.component";
import { DescriptionCompanyComponent } from "../../components/description-company/description-company.component";
import { BecauseBetterComponent } from "../../components/because-better/because-better.component";
import { AlbumTeamComponent } from "../../components/album-team/album-team.component";
import { CompanyObjetivesComponent } from "../../components/company-objetives/company-objetives.component";
import { CompaniesComponent } from "../../../home/components/companies/companies.component";

@Component({
  selector: 'about-layout',
  standalone: true,
  imports: [TitleForPagesComponent, DescriptionCompanyComponent, BecauseBetterComponent, AlbumTeamComponent, CompanyObjetivesComponent, CompaniesComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutAboutComponent {

  title:string="Sobre Nosotros"



}

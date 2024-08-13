import { Component, ElementRef, ViewChild } from '@angular/core';
import { DirectionsComponent } from "../common/components/directions/directions.component";
import { LogoCertificationsComponent } from "../common/components/logo-certifications/logo-certifications.component";
import { SidebarComponent } from "../common/components/sidebar/sidebar.component";
import { ButtonSidebarSmallComponent } from "../common/components/button-sidebar-small/button-sidebar-small.component";
import { SidebarSmallComponent } from "../common/components/sidebar-small/sidebar-small.component";
import { ButtonCloseSmallBarComponent } from "../common/components/button-close-small-bar/button-close-small-bar.component";
import { GeomacFooterComponent } from "../common/components/geomac-footer/geomac-footer.component";
import { LayoutHomeComponent } from "../home/pages/layout.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'geomac-layouts',
  standalone: true,
  imports: [
    RouterOutlet,


    DirectionsComponent,
    LogoCertificationsComponent,
    SidebarComponent,
    ButtonSidebarSmallComponent,
    SidebarSmallComponent,
    ButtonCloseSmallBarComponent,
    GeomacFooterComponent,
    LayoutHomeComponent,


],
  templateUrl: './layouts.component.html',

})
export class LayoutsComponent {
  public isActive:Boolean=false



  openSmallBar(){
    this.isActive = !this.isActive
  }

  closeSmallBar(){
    this.isActive=!this.isActive
    }



}

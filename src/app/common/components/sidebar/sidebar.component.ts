import { Component } from '@angular/core';
import { Menu } from '../../interfaces/menu.interface';
import { CommonModule } from '@angular/common';
import { info } from '../../helpers/info-menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'geomac-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent{
  public isActive:boolean=true

  public itemsMenuNavbar: Menu[] = info
}


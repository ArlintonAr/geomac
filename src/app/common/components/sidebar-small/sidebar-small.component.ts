import { Component } from '@angular/core';
import { Menu, SubMenu } from '../../interfaces/menu.interface';
import { CommonModule } from '@angular/common';
import { info } from '../../helpers/info-menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sidebar-small',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './sidebar-small.component.html',
  styles: ``
})

export class SidebarSmallComponent {
  public isActiveHidden:boolean=true

  public itemsMenuNavbar: Menu[] = info
    changeStateSubMenu():boolean{
     return this.isActiveHidden=!this.isActiveHidden
    }
}

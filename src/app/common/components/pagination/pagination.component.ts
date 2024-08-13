import { Component, Input,  } from '@angular/core';
import { NgxPaginationModule, PaginationInstance,  } from 'ngx-pagination';
import { PaginationControlsComponent } from "../pagination-controls/pagination-controls.component";


@Component({
  selector: 'common-pagination',
  standalone: true,
  imports: [NgxPaginationModule, PaginationControlsComponent],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {

  @Input()
  arrayContent:any[]=[]

  public p:number=1

}

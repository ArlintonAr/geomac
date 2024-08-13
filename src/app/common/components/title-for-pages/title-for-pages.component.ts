import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'title-for-pages',
  standalone: true,
  imports: [],
  templateUrl: './title-for-pages.component.html',
  styles: ``
})
export class TitleForPagesComponent {

  @Input()
  titlePage:string = ''
}

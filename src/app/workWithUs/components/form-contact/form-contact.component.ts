import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WorkService } from '../../work.service';



@Component({
  selector: 'form-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './form-contact.component.html',
  styles: ``
})
export class FormContactComponent {

  private  workService=inject(WorkService)

  public myFormContact: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.minLength(8)]],
    message: ['', [Validators.minLength(2)]]
  })

  constructor(
    private fb: FormBuilder,


  ) { }

/*   sendMessageForEmail() {
    this.workService.sendEmail(this.myFormContact.value)
  } */



}

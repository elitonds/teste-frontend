import { MeasurementUnit } from './../../utils/MeasurementUnit.enum';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './app-new.component.html',
  styleUrls: ['./app-new.component.css']
})
export class AppNewComponent {

  form: FormGroup;
  units:MeasurementUnit.KG;

  firstName = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password": ["", Validators.required]
    });

  }
  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }

}

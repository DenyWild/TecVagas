import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.scss']
})
export class CadastroCandidatoComponent {

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    hide = true;

    hideRequiredControl = new FormControl(false);
    floatLabelControl = new FormControl('auto' as FloatLabelType);
    options = this._formBuilder.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

    constructor(private _formBuilder: FormBuilder) {}

    getFloatLabelValue(): FloatLabelType {
      return this.floatLabelControl.value || 'auto';
    }

}

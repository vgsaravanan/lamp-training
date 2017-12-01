import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function emailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const result = nameRe.test(control.value);
    return result ? {'emailvalidator': {value: control.value}} : null;
  };
}
@Directive({
  selector: '[appEmailvalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailvalidatorDirective, multi: true}]  
})
export class EmailvalidatorDirective implements Validator {
  @Input() emailvalidator: string;
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.emailvalidator ? emailValidator(new RegExp(this.emailvalidator, 'i'))(control)
                              : null;
  }
}

import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {
        cannotContainSpace: true
      }
    }

    return null;
  }

  static mustBeValidated(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'invalid') {
          resolve({isValidated: true});
        }
        resolve(null);
      }, 2000);
    });

    return null;
  }
}

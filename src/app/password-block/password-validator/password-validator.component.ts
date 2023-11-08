import {Component, Input, SimpleChange} from '@angular/core';

enum Strength {
  EMPTY = '',
  INVALID = 'invalid',
  EASY = 'easy',
  MEDIUM = 'medium',
  STRONG = 'strong',
}

@Component({
  selector: 'password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent {
  passwordStrength = Strength.EMPTY;
  message = '';

  @Input() public passwordToCheck = '';

  checkStrength(password: string): number {
    let strength = 0;

    const letters = /[a-zA-Z]+/.test(password);
    const numbers = /[0-9]+/.test(password);
    const symbols = /[$-/:-?{-~!"^_@`\[\]]/g.test(password);

    const rules = [letters, numbers, symbols];

    // counts how many of these rules have been passed
    let passedRules = 0;
    for (const rule of rules) {
      passedRules += rule === true ? 1 : 0;
    }

    // set the initial strength
    strength += 2 * password.length + (password.length > 8 ? 1 : 0);
    strength += passedRules * 10;

    // checks if pass has less than 8 characters
    strength = password.length < 8 ? Math.min(strength, 5) : strength;

    // set strength based on passed rules
    strength = passedRules === 1 ? Math.min(strength, 10) : strength;
    strength = passedRules === 2 ? Math.min(strength, 20) : strength;
    strength = passedRules === 3 ? Math.min(strength, 30) : strength;

    return strength;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;

    if (password) {
      const pwdStrength = this.checkStrength(password);

      switch (pwdStrength) {
        case 5:
          this.message = 'less than 8 characters long';
          this.passwordStrength = Strength.INVALID;
          break;
        case 10:
          this.message = 'Easy';
          this.passwordStrength = Strength.EASY;
          break;
        case 20:
          this.message = 'Medium';
          this.passwordStrength = Strength.MEDIUM;
          break;
        case 30:
          this.message = 'Strong';
          this.passwordStrength = Strength.STRONG;
          break;

      }
    } else {
      this.message = '';
      this.passwordStrength = Strength.EMPTY;
    }
  }

}

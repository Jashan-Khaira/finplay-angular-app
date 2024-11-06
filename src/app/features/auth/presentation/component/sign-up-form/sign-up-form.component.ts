import { Component } from '@angular/core';
import { ButtonStyle } from '../../../../../core/common/components/button/button-type.enum';
import { InputType } from '../../../../../core/common/components/textfield/input-type.enum';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {
  emailType: InputType = InputType.EMAIL;
  passwordType: InputType = InputType.PASSWORD;

  emailValue: string = '';
  passwordValue: string = '';

  signUp(): void {
    console.log('signUp');
  }

  navigateToSignIn(): void {
    console.log('navigateToSignIn');
  }
}

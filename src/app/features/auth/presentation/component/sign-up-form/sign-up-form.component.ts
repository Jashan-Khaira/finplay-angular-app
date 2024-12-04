import {Component, inject} from '@angular/core';
import { ButtonStyle } from '../../../../../core/common/components/button/button-type.enum';
import { InputType } from '../../../../../core/common/components/textfield/input-type.enum';
import {AuthRepositoryImpl} from '../../../data/respository/auth_repository_impl';

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

  authRepository = inject(AuthRepositoryImpl);

  signUp(): void {
    // console.log('signUp');

    this.authRepository.signUpWithEmailPassword(this.emailValue, this.passwordValue, this.passwordValue).subscribe({
      next: () => {
        console.log('SignUp successful');
      },
      error: (error) => {
        console.log('SignUp failed', error);
      }
    })
  }

  navigateToSignIn(): void {
    console.log('navigateToSignIn');
  }
}

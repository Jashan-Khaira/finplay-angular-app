import { Component, inject } from '@angular/core';
import { InputType } from '../../../../../core/common/components/textfield/input-type.enum';
import { ButtonStyle } from '../../../../../core/common/components/button/button-type.enum';
import { AuthRepositoryImpl } from '../../../data/respository/auth_repository_impl';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
  standalone: false,
})
export class SignInFormComponent {
  emailType: InputType = InputType.EMAIL;
  passwordType: InputType = InputType.PASSWORD;

  outlineTypeButton = ButtonStyle.OUTLINED_BUTTON

  emailValue: string = '';
  passwordValue: string = '';

  authRepository = inject(AuthRepositoryImpl);

  onLogin(): void {
    console.log('onLogin');
    this.authRepository.signInWithEmailPassword(this.emailValue, this.passwordValue).subscribe({
      next: () => {
        console.log('Login successful');
      },
      error: (error) => {
        console.log('Login failed', error);
      }
    });
  }

  navigateToSignUp(): void {
    console.log('navigateToSignUp');
  }

  forgotPassword(): void {
    console.log('forgotPassword');
  }
}
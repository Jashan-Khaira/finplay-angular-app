import { Component, inject } from '@angular/core';
import { InputType } from '../../../../../core/common/components/textfield/input-type.enum';
import { ButtonStyle } from '../../../../../core/common/components/button/button-type.enum';
import { AuthRepositoryImpl } from '../../../data/respository/auth_repository_impl';
import { Router } from '@angular/router';
import { ButtonState } from '../../../../../core/common/components/button/button-state.enum';

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

  router: Router;

  loginButtonState: ButtonState = ButtonState.ENABLED;

  constructor(router: Router) {
    this.router = router;
  }

  onLogin(): void {
    this.loginButtonState = ButtonState.LOADING;
    this.authRepository.signInWithEmailPassword(this.emailValue, this.passwordValue).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
        this.loginButtonState = ButtonState.ENABLED;
      },
      error: (error) => {
    this.loginButtonState = ButtonState.ENABLED;
        console.log('Login failed', error);
      }
    });
  }

  navigateToSignUp(): void {
    this.router.navigate(['/auth/sign-up']);

  }

  forgotPassword(): void {
    console.log('forgotPassword');
  }
}

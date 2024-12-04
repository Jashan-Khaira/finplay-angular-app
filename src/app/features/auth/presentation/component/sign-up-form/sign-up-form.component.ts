import {Component, inject} from '@angular/core';
import { ButtonStyle } from '../../../../../core/common/components/button/button-type.enum';
import { InputType } from '../../../../../core/common/components/textfield/input-type.enum';
import {AuthRepositoryImpl} from '../../../data/respository/auth_repository_impl';
import { Router } from '@angular/router';

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

constructor(private router: Router) {}

  signUp(): void {
    this.authRepository.signUpWithEmailPassword(this.emailValue, this.passwordValue, this.passwordValue).subscribe({
      next: () => {
        this.router.navigate(['/auth/sign-in']);
      },
      error: (error) => {
        console.log('SignUp failed', error);
      }
    })
  }

  navigateToSignIn(): void {
    this.router.navigate(['/auth/sign-in']);
  }
}

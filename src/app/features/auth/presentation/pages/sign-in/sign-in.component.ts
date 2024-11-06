import { Component } from '@angular/core';
import { AuthModule } from '../../../auth.module';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  imports: [AuthModule],
})
export class SignInComponent {


}

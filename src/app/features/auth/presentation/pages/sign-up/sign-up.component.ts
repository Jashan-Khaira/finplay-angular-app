import { Component } from '@angular/core';
import { AuthModule } from '../../../auth.module';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  standalone: true,
  imports: [AuthModule],
})
export class SignUpComponent {

}

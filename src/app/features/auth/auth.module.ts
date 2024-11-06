import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInFormComponent } from './presentation/component/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './presentation/component/sign-up-form/sign-up-form.component';
import { CoreCommonModule } from '../../core/common/core-common.module';

@NgModule({
  declarations: [SignInFormComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreCommonModule
  ],
  exports: [SignInFormComponent, SignUpFormComponent]
})
export class AuthModule { }

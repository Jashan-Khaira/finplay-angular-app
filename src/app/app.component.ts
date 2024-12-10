import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreCommonModule } from './core/common/core-common.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatureModule } from './features/feature.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreCommonModule, CommonModule, FeatureModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'finpaly-frontend';
  
}

import { Component } from '@angular/core';
import { DashboardModule } from '../../../dashboard.module';
import { CoreCommonModule } from "../../../../../core/common/core-common.module";
import { TabModel } from '../../../../../core/common/components/tabs/tabs.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   
}

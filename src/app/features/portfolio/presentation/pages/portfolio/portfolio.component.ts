import { Component } from '@angular/core';
import {PortfolioModule} from '../../../portfolio.module';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}

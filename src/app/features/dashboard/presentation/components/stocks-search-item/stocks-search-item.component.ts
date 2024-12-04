import { Component, Input } from '@angular/core';
import { faArrowRight, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stocks-search-item',
  templateUrl: './stocks-search-item.component.html',
  styleUrl: './stocks-search-item.component.scss'
})
export class StocksSearchItemComponent {
  stockIcon = faChartLine;
  arrowRight = faArrowRight;

  @Input() title: string = '';
  @Input() symbol: string = '';
  @Input() price: number = 0;
  @Input() changePercent: number = 0;
  @Input() isProfit: boolean = true;
}

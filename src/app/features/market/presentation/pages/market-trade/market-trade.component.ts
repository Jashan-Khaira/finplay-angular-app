import { Component } from '@angular/core';
import { MarketModule } from "../../../market.module";

@Component({
  selector: 'app-market-trade',
  standalone: true,
  imports: [MarketModule],
  templateUrl: './market-trade.component.html',
  styleUrl: './market-trade.component.scss'
})
export class MarketTradeComponent {

}

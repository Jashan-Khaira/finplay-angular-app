import { Component } from '@angular/core';
import { Stock } from '../../../../../core/common/entites/stock.entity';
import { MarketStocks } from '../../../data/model/market-stocks.model';

@Component({
  selector: 'app-market-trade-view',
  templateUrl: './market-trade-view.component.html',
  styleUrl: './market-trade-view.component.scss'
})
export class MarketTradeViewComponent {
  marketStock : MarketStocks | null = null;

  onStockSelected(stock: MarketStocks) {
    // console.log('Stock selected', stock);
    this.marketStock = stock;
  }
}

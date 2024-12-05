import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarketStocks } from '../../../data/model/market-stocks.model';
import { MarketRepositoryImpl } from '../../../data/repository/market_repository_impl';
import { MarketStockDetailsModel } from '../../../data/model/market-stock-details.model';

@Component({
  selector: 'app-stock-details-view',
  templateUrl: './stock-details-view.component.html',
  styleUrl: './stock-details-view.component.scss'
})
export class StockDetailsViewComponent implements OnChanges {
  @Input() stock: MarketStocks | null = null;
  isLoading: boolean = false;
  showStockDetails: boolean = false;

  marketStockDetails: MarketStockDetailsModel | null = null;

  marketRepoImpl = inject(MarketRepositoryImpl);

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
      if(changes['stock'].currentValue && (changes['stock'].currentValue.symbol != changes['stock'].previousValue.symbol)) {
        this.showStockDetails = true;
        this.getStockDetials();
      } 
  }

  getStockDetials() {
    this.isLoading = true;
    this.marketRepoImpl.searchStocksBySymbol(this.stock!.symbol).subscribe({
      next: (_) => {
        this.isLoading = false;
        this.marketStockDetails = _;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
        this.marketStockDetails = null;
      }
    });
  }

  buyMarketStock() {
    // console.log("Buying Stock");
    this.marketRepoImpl.buyStock("1", "", 1, 1).subscribe({
      next: (_) => {
        console.log(_);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }  
}

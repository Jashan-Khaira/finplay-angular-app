import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MarketStocks } from '../../../data/model/market-stocks.model';
import { MarketRepositoryImpl } from '../../../data/repository/market_repository_impl';
import { MarketStockDetailsModel } from '../../../data/model/market-stock-details.model';
import { faArrowDownLong, faArrowUpLong, faHandPointer, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { InputType } from '../../../../../core/common/components/textfield/input-type.enum';
import { Stock } from '../../../../../core/common/entites/stock.entity';

@Component({
  selector: 'app-stock-details-view',
  templateUrl: './stock-details-view.component.html',
  styleUrl: './stock-details-view.component.scss'
})
export class StockDetailsViewComponent implements OnChanges {
  @Input() stock: MarketStocks | null = null;
  isLoading: boolean = false;
  isButtonLoading : boolean = false;
  showStockDetails: boolean = false;

  marketStockDetails: MarketStockDetailsModel | null = null;
  stockData : Stock | null = null;

  marketRepoImpl = inject(MarketRepositoryImpl);

  iconIncrease = faArrowUpLong;
  iconDecrease = faArrowDownLong;
  iconHand = faHandPointer;


  dataLC : any;
  viewLc : [number, number] = [700,400];

  inputNumberType : InputType = InputType.NUMBER;

  // stockPrice : number = this.stockData?.currentValue || 23.03;
  stockPrice : number = 0;
  stockQuantity : number = 1;
  averageVolume : number = 0;
  previousClose : number = 0;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
      if((changes['stock'] && changes['stock'].previousValue == null && changes['stock'].currentValue ) || ((changes['stock'].currentValue?.symbol != changes['stock'].previousValue?.symbol))) {
        this.showStockDetails = true;
        this.getStockDetials();
      } 
  }

  getStockDetials() {
    this.isLoading = true;
    this.marketRepoImpl.searchStocksBySymbol(this.stock!.symbol).subscribe({
      next: (_) => {
        console.log(_);

        this.isLoading = false;

        this.marketStockDetails = _;
        this.previousClose = this.marketStockDetails.meta_data_list[this.marketStockDetails.meta_data_list.length - 2].close;
        this.stockPrice = this.stock!.close;
        this. createOpenCloseSeries();
        this.averageVolume = this.getAverageVolume();
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
        this.marketStockDetails = null;
      }
    });
  }

  createOpenCloseSeries() {
    if(this.marketStockDetails) {
      
    
    let openSeries : any[] = [];
    let closeSeries : any[] = [];

    this.marketStockDetails.meta_data_list.forEach((history) => {
      openSeries.push({
        name: history.date,
        value: history.open
      });

      closeSeries.push({
        name: history.date,
        value: history.close
      });
    });


    this.dataLC = [
      {
        name: 'open',
        series: openSeries
      },
      {
        name: 'close',
        series: closeSeries
      },
    ]
  }
}

  getAverageVolume() {
    if(this.marketStockDetails) {
      let totalVolume = this.marketStockDetails.meta_data_list.reduce((acc, history) => {
        return acc + history.volume;
      }, 0);

      return totalVolume / this.marketStockDetails.meta_data_list.length;
    }

    return 0;
  }

  buyMarketStock() {
    // console.log("Buying Stock");
    if(this.marketStockDetails && this.stock) {
      this.isButtonLoading = true;
      this.marketRepoImpl.buyStock(this.stock.symbol, this.stockQuantity, this.stockPrice).subscribe({
        next: (_) => {
          this.isButtonLoading = false;
          console.log(_);
        },
        error: (err) => {
          this.isButtonLoading = false;
          console.log(err);
        }
      });

    }
  }  
}

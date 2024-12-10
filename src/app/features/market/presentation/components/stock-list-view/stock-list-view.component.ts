import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { faChevronCircleDown, faChevronCircleUp, faCircleInfo, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MarketStocks } from '../../../data/model/market-stocks.model';
import { MarketRepositoryImpl } from '../../../data/repository/market_repository_impl';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-stock-list-view',
  templateUrl: './stock-list-view.component.html',
  styleUrl: './stock-list-view.component.scss'
})
export class StockListViewComponent implements OnInit {

  cheveronUp = faChevronCircleUp;
  cheveronDown = faChevronCircleDown;
  iconInfo =  faCircleInfo;
  iconSpinner = faSpinner;

  marketStocks: MarketStocks[] = [];

  @Output() onStockSelected : EventEmitter<MarketStocks> = new EventEmitter<MarketStocks>();

  isLoading: boolean = false;

  marketRepoImpl = inject(MarketRepositoryImpl);

  ngOnInit(): void {
    this.isLoading = true;
    this.marketRepoImpl.searchStocks("").subscribe({
      next: (stocks) => {
        this.marketStocks = stocks;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  onSearch(value : string) {
      this.isLoading = true;
      this.marketRepoImpl.searchStocks(value).pipe(
        debounceTime(300),
      ).subscribe({
        next: (stocks) => {
          this.marketStocks = stocks;
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        }
      });
  }

  // onSearch2(value : string) {}

  onSelectedStock(stock: MarketStocks) {
    this.onStockSelected.emit(stock);
  }
}

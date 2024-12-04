import {Component, inject, OnInit} from '@angular/core';
import { TabModel } from '../../../../../core/common/components/tabs/tabs.model';
import {NavigationEnd, Router} from '@angular/router';
import { SearchStock } from '../../../data/model/search_stock.model';
import { DashboardRepositoryImpl } from '../../../data/repository/dashboard_repository_impl';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss'
})
export class DashboardViewComponent implements  OnInit {
  tabs: TabModel[] = [
    {
      id: 'home',
      label: 'Home',
      disabled: false,
      route: 'home'
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      disabled: false,
      route: 'portfolio'
    },
    {
      id: 'market_trade',
      label: 'Market Trade',
      disabled: false,
      route: 'market-trade'
    },
];

  activeTab: string = 'home';

  showResults: boolean = false;
  isSearchLoading: boolean = false;

  stockList: SearchStock[] = [];

  dashboardResponsitory = inject(DashboardRepositoryImpl);

  constructor(private router: Router) { }

  onTabClick(tab: TabModel) {
    this.activeTab = tab.id;
  }

  ngOnInit(): void {
    console.log("Route : ", this.router.url)
    this.setTabRoute(this.router.url);
  }

  setTabRoute(path : string) {
    const tab = this.tabs.find(tab => path.includes(tab.route));

    if(tab) {
      this.activeTab = tab.id;
    }
  }

  onSearch(value: string) {
    // console.log('Search value: ', value);
    this.isSearchLoading = true;
    this.dashboardResponsitory.searchStocks(value).pipe(
      debounceTime(300),      
    ).subscribe({
      next: (data: SearchStock[]) => {
        console.log('Search result: ', data);
        this.stockList = data;
        this.showResults = true;
        this.isSearchLoading = false;
      },
      error: (err) => {
        this.showResults = false;
        this.isSearchLoading = false;
      }
    });
  }
}

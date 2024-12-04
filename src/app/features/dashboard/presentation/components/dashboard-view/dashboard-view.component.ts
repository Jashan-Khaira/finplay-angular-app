import {Component, OnInit} from '@angular/core';
import { TabModel } from '../../../../../core/common/components/tabs/tabs.model';
import {NavigationEnd, Router} from '@angular/router';

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
}

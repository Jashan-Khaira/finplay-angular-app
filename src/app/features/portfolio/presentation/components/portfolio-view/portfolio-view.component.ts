import { Component, inject, OnInit } from '@angular/core';
import { Portfolio } from '../../../model/portfolio.model';
import { PortfolioRepositoryImpl } from '../../../data/repository/portfolio_repository_impl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrl: './portfolio-view.component.scss'
})
export class PortfolioViewComponent implements OnInit {
  columData : {
    name: string,
    prop: string,
    colSpan: number,
    class?: string
  }[] = [
    {
      name: 'Instrument',
      prop: 'stockName',
      colSpan: 4,
      class: 'col-span-4'
    },
    {
      name: 'Qty',
      prop: 'quantity',
      colSpan: 2,
      class: 'border border-1 border-r-0 border-neutral col-span-2'
    },
    {
      name: 'Avg. Cost',
      prop: 'avgCost',
      colSpan: 2,
      class: 'border border-1 border-r-0 border-l-0 border-neutral col-span-2'
    },
    {
      name: 'Cur. Val',
      prop: 'currentValue',
      colSpan: 2,
      class: 'border border-1 border-r-0 border-l-0 border-neutral col-span-2'
    },
    {
      name: 'P&L',
      prop: 'pnl',
      colSpan: 2,
      class: 'border border-1  border-neutral bg-neutral-200 col-span-2'
    },
    {
      name: 'Net. chg',
      prop: 'netChange',
      colSpan: 2,
      class: 'col-span-2'
    },
    {
      name: 'Day. chg',
      prop: 'dayChange',
      colSpan: 2,
      class: 'col-span-2'
    }
  ]

  portfolio : Portfolio | undefined = undefined;
  
  isLoading = false;

  portfolioRepository = inject(PortfolioRepositoryImpl);

  constructor(private _router: Router) { }

  ngOnInit(): void {
    const id = localStorage.getItem('userId');

    if (!id) {
      // throw new Error('User id not found');
      localStorage.clear();
      this._router.navigate(['auth/login']);
    }else {
      this.isLoading = true;

      this.portfolioRepository.getPortfolio(id).subscribe({
          next: (portfolio) => {
            this.portfolio = portfolio;
            this.isLoading = false;
          },
          error: (err) => {
            console.log(err);
          },
      })
    }
  
  }
}

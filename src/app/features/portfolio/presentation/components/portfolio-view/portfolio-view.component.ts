import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrl: './portfolio-view.component.scss'
})
export class PortfolioViewComponent {

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

  data : any[] = [
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    },
    {
      stockName: "BSE",
      quantity: 1,
      avgCost: 552.50,
      currentValue: 567.10,
      pnl: 14.60,
      netChange: 2.64,
      dayChange: -0.30,
    }
  ]

}

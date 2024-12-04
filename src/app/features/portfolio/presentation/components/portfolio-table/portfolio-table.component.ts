import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrl: './portfolio-table.component.scss'
})
export class PortfolioTableComponent {
    @Input() columnData : {
      name: string,
      prop: string,
      colSpan: number,
      class?: string
    }[] = [];

    @Input() data : any[] = [];
}

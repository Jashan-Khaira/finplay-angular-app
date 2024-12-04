import { Component, Input } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assets-item-view',
  templateUrl: './assets-item-view.component.html',
  styleUrl: './assets-item-view.component.scss'
})
export class AssetsItemViewComponent {
  stockIcon = faChartLine;

  @Input() title: string = "";

  @Input() profit: string = "";
  constructor() {}
}

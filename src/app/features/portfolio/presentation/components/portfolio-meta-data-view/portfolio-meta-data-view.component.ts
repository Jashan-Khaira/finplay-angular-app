import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-portfolio-meta-data-view',
  templateUrl: './portfolio-meta-data-view.component.html',
  styleUrl: './portfolio-meta-data-view.component.scss'
})
export class PortfolioMetaDataViewComponent {
  @Input() title: string = "";
  @Input() value: string = "";
  @Input() metaData: string = "";
  @Input() valueColor: string = "";
  @Input() metaDataColor: string = "";
}

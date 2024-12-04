import {NgModule} from '@angular/core';
import {PortfolioViewComponent} from './presentation/components/portfolio-view/portfolio-view.component';
import {CommonModule} from '@angular/common';
import {CoreCommonModule} from '../../core/common/core-common.module';
import {PortfolioTableComponent} from './presentation/components/portfolio-table/portfolio-table.component';
import {
  PortfolioMetaDataViewComponent
} from './presentation/components/portfolio-meta-data-view/portfolio-meta-data-view.component';

@NgModule({
  declarations: [PortfolioViewComponent, PortfolioTableComponent, PortfolioMetaDataViewComponent],
  imports: [CommonModule, CoreCommonModule],
  exports: [PortfolioViewComponent, PortfolioTableComponent, PortfolioMetaDataViewComponent]
})
export class PortfolioModule {
}

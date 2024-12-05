import { NgModule } from "@angular/core";
import { MarketTradeViewComponent } from "./presentation/components/market-trade-view/market-trade-view.component";
import { StockListViewComponent } from "./presentation/components/stock-list-view/stock-list-view.component";
import { StockDetailsViewComponent } from "./presentation/components/stock-details-view/stock-details-view.component";
import { CommonModule } from "@angular/common";
import { CoreCommonModule } from "../../core/common/core-common.module";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
    declarations: [MarketTradeViewComponent, StockListViewComponent, StockDetailsViewComponent],
    imports: [CommonModule, CoreCommonModule, NgxChartsModule],
    exports: [MarketTradeViewComponent, StockListViewComponent, StockDetailsViewComponent]
})
export class MarketModule { }
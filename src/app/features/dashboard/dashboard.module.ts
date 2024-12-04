import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreCommonModule } from "../../core/common/core-common.module";
import { RouterOutlet } from "@angular/router";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardViewComponent } from "./presentation/components/dashboard-view/dashboard-view.component";
import { StocksSearchItemComponent } from "./presentation/components/stocks-search-item/stocks-search-item.component";

@NgModule({
    declarations: [DashboardViewComponent, StocksSearchItemComponent],
    imports: [CommonModule, DashboardRoutingModule, CoreCommonModule],
    exports: [DashboardViewComponent, StocksSearchItemComponent]
})
export class DashboardModule {

}
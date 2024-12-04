import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreCommonModule } from "../../core/common/core-common.module";
import { HomeViewComponent } from "./presentation/component/home-view/home-view.component";
import { CategoriesItemViewComponent } from "./presentation/component/categories-item-view/categories-item-view.component";
import { AssetsItemViewComponent } from "./presentation/component/assets-item-view/assets-item-view.component";

@NgModule({
    declarations: [HomeViewComponent, CategoriesItemViewComponent, AssetsItemViewComponent],
    imports: [CommonModule, CoreCommonModule],
    exports: [HomeViewComponent, CategoriesItemViewComponent, AssetsItemViewComponent]
})
export class HomeModule {

}
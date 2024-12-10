import { inject, NgModule, OnInit } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { TextfieldComponent } from "./components/textfield/textfield.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from "./font-awesome-icon";
import { faR, fas } from "@fortawesome/free-solid-svg-icons";
import { TabsComponent } from "./components/tabs/tabs.component";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { SearchComponent } from "./components/search/search.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NumberFormatterPipe } from "./pipes/numberFormatter.pipe";

@NgModule({
    declarations: [ButtonComponent, TextfieldComponent, TabsComponent, SearchComponent, NumberFormatterPipe],
    imports: [FontAwesomeModule, CommonModule, RouterModule],
    exports: [ButtonComponent, TextfieldComponent, TabsComponent, SearchComponent, FontAwesomeModule, NumberFormatterPipe],
})
export class CoreCommonModule implements OnInit {
    
    faIconLibrary = inject(FaIconLibrary);

    ngOnInit(): void {
        this.initIcons();
    }

    private initIcons() {
        this.faIconLibrary.addIcons(...fontAwesomeIcons)
        this.faIconLibrary.addIconPacks(fas);
    }
}
import { inject, NgModule, OnInit } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { TextfieldComponent } from "./components/textfield/textfield.component";
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from "./font-awesome-icon";
import { faR, fas } from "@fortawesome/free-solid-svg-icons";

@NgModule({
    declarations: [ButtonComponent, TextfieldComponent],
    imports: [FontAwesomeModule],
    exports: [ButtonComponent, TextfieldComponent],
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
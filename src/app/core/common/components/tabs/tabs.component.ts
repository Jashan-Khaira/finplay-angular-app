import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabModel } from './tabs.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
     @Input() id: string = '';
     @Input() tabs: TabModel[] = [];
     @Input() activeTab: string = '';
     @Output() onTabClick: EventEmitter<TabModel> = new EventEmitter<TabModel>(); 

     tabClick(tab: TabModel) {
          this.onTabClick.emit(tab);
     }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleXmark, faCross } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories-item-view',
  templateUrl: './categories-item-view.component.html',
  styleUrl: './categories-item-view.component.scss'
})
export class CategoriesItemViewComponent {
  @Input() title: string = '';
  @Input() selected: boolean = false;
  @Output() onSelectCategory: EventEmitter<string> = new EventEmitter<string>();

  unSelectedClass = "border-neutral bg-white text-black";
  selectClass = "border-primary-300 bg-primary-300 text-white";

  crossIcon = faCircleXmark;

  onSelectingCategory() {
    this.onSelectCategory.emit(this.title);
  }
}

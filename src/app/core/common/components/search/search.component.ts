import { Component, Input } from '@angular/core';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchIcon = faSearch;
  spinnerIcon = faSpinner;

  @Input() placeholder: string = '';
  @Input() showResults: boolean = false;
  @Input() isLoading: boolean = false;
  
}

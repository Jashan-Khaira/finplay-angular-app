import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  categoriesList = [
    { title: 'Top 10 stocks', selected: false },
    { title: 'Technology', selected: false },
    { title: 'Retail', selected: false },
    { title: 'Healthcare', selected: false }
  ]

  popularAssets = [
    {
      title: 'Apple Inc.',
      profit: '+2.3%'
    },
    {
      title: 'Microsoft Corporation',
      profit: '+1.2%'
    },
    {
      title: 'Amazon.com Inc.',
      description: 'AMZN',
      profit: '+3.1%'
    }
  ]

  onSelectCategory(category: string) {
    this.categoriesList.forEach((item) => {
      if(item.title == category) {
        item.selected = !item.selected;
      }else {
        item.selected = false;
      }
    });    
  }
}

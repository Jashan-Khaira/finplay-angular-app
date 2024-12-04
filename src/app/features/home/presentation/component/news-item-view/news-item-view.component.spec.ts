import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemViewComponent } from './news-item-view.component';

describe('NewsItemViewComponent', () => {
  let component: NewsItemViewComponent;
  let fixture: ComponentFixture<NewsItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsItemViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

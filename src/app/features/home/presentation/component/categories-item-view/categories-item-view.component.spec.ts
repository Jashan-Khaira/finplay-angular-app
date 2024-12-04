import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesItemViewComponent } from './categories-item-view.component';

describe('CategoriesItemViewComponent', () => {
  let component: CategoriesItemViewComponent;
  let fixture: ComponentFixture<CategoriesItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesItemViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

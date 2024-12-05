import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDetailsViewComponent } from './stock-details-view.component';

describe('StockDetailsViewComponent', () => {
  let component: StockDetailsViewComponent;
  let fixture: ComponentFixture<StockDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDetailsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

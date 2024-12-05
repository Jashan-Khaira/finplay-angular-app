import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketTradeViewComponent } from './market-trade-view.component';

describe('MarketTradeViewComponent', () => {
  let component: MarketTradeViewComponent;
  let fixture: ComponentFixture<MarketTradeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketTradeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketTradeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMetaDataViewComponent } from './portfolio-meta-data-view.component';

describe('PortfolioMetaDataViewComponent', () => {
  let component: PortfolioMetaDataViewComponent;
  let fixture: ComponentFixture<PortfolioMetaDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMetaDataViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioMetaDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

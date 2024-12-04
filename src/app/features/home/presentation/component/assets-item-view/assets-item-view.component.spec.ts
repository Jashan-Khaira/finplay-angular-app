import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsItemViewComponent } from './assets-item-view.component';

describe('AssetsItemViewComponent', () => {
  let component: AssetsItemViewComponent;
  let fixture: ComponentFixture<AssetsItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsItemViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

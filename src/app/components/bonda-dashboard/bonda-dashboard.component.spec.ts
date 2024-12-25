import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondaDashboardComponent } from './bonda-dashboard.component';

describe('BondaDashboardComponent', () => {
  let component: BondaDashboardComponent;
  let fixture: ComponentFixture<BondaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BondaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

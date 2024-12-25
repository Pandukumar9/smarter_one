import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdlyDashboardComponent } from './idly-dashboard.component';

describe('IdlyDashboardComponent', () => {
  let component: IdlyDashboardComponent;
  let fixture: ComponentFixture<IdlyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdlyDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdlyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

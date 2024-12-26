import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpmaDashboardComponent } from './upma-dashboard.component';

describe('UpmaDashboardComponent', () => {
  let component: UpmaDashboardComponent;
  let fixture: ComponentFixture<UpmaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpmaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpmaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

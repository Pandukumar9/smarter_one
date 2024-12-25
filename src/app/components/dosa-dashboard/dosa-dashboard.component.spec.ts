import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosaDashboardComponent } from './dosa-dashboard.component';

describe('DosaDashboardComponent', () => {
  let component: DosaDashboardComponent;
  let fixture: ComponentFixture<DosaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

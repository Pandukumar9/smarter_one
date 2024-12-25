import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondaitemsComponent } from './bondaitems.component';

describe('BondaitemsComponent', () => {
  let component: BondaitemsComponent;
  let fixture: ComponentFixture<BondaitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BondaitemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondaitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDashboradComponent } from './view-dashborad.component';

describe('ViewDashboradComponent', () => {
  let component: ViewDashboradComponent;
  let fixture: ComponentFixture<ViewDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDashboradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

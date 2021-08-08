import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDashboradComponent } from './list-dashborad.component';

describe('ListDashboradComponent', () => {
  let component: ListDashboradComponent;
  let fixture: ComponentFixture<ListDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDashboradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

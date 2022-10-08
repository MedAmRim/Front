import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchambersComponent } from './listchambers.component';

describe('ListchambersComponent', () => {
  let component: ListchambersComponent;
  let fixture: ComponentFixture<ListchambersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchambersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListchambersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

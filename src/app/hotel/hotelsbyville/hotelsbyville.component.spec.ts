import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsbyvilleComponent } from './hotelsbyville.component';

describe('HotelsbyvilleComponent', () => {
  let component: HotelsbyvilleComponent;
  let fixture: ComponentFixture<HotelsbyvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsbyvilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsbyvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

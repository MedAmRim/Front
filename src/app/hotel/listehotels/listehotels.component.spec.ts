import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListehotelsComponent } from './listehotels.component';

describe('ListehotelsComponent', () => {
  let component: ListehotelsComponent;
  let fixture: ComponentFixture<ListehotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListehotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListehotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

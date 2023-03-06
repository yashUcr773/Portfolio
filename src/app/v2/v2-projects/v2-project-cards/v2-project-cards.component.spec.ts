import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2ProjectCardsComponent } from './v2-project-cards.component';

describe('V2ProjectCardsComponent', () => {
  let component: V2ProjectCardsComponent;
  let fixture: ComponentFixture<V2ProjectCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2ProjectCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2ProjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

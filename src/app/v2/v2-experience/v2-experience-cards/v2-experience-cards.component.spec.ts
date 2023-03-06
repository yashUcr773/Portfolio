import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2ExperienceCardsComponent } from './v2-experience-cards.component';

describe('V2ExperienceCardsComponent', () => {
  let component: V2ExperienceCardsComponent;
  let fixture: ComponentFixture<V2ExperienceCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2ExperienceCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2ExperienceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

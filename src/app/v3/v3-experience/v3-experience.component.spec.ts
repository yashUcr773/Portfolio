import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3ExperienceComponent } from './v3-experience.component';

describe('V3ExperienceComponent', () => {
  let component: V3ExperienceComponent;
  let fixture: ComponentFixture<V3ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3ExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

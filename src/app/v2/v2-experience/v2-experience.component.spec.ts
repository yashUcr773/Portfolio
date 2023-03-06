import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2ExperienceComponent } from './v2-experience.component';

describe('V2ExperienceComponent', () => {
  let component: V2ExperienceComponent;
  let fixture: ComponentFixture<V2ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2ExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

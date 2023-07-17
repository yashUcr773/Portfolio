import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3HeroComponent } from './v3-hero.component';

describe('V3HeroComponent', () => {
  let component: V3HeroComponent;
  let fixture: ComponentFixture<V3HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3HeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2HeroComponent } from './v2-hero.component';

describe('V2HeroComponent', () => {
  let component: V2HeroComponent;
  let fixture: ComponentFixture<V2HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2HeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3AboutComponent } from './v3-about.component';

describe('V3AboutComponent', () => {
  let component: V3AboutComponent;
  let fixture: ComponentFixture<V3AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3BaseComponent } from './v3-base.component';

describe('V3BaseComponent', () => {
  let component: V3BaseComponent;
  let fixture: ComponentFixture<V3BaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3BaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3BaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

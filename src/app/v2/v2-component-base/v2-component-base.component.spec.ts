import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2ComponentBaseComponent } from './v2-component-base.component';

describe('V2ComponentBaseComponent', () => {
  let component: V2ComponentBaseComponent;
  let fixture: ComponentFixture<V2ComponentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2ComponentBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2ComponentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

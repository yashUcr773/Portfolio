import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3HomeComponent } from './v3-home.component';

describe('V3HomeComponent', () => {
  let component: V3HomeComponent;
  let fixture: ComponentFixture<V3HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3HeaderComponent } from './v3-header.component';

describe('V3HeaderComponent', () => {
  let component: V3HeaderComponent;
  let fixture: ComponentFixture<V3HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2AboutComponent } from './v2-about.component';

describe('V2AboutComponent', () => {
  let component: V2AboutComponent;
  let fixture: ComponentFixture<V2AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

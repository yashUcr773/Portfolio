import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2SvgsComponent } from './v2-svgs.component';

describe('V2SvgsComponent', () => {
  let component: V2SvgsComponent;
  let fixture: ComponentFixture<V2SvgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2SvgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2SvgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

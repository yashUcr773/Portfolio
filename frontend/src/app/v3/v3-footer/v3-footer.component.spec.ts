import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3FooterComponent } from './v3-footer.component';

describe('V3FooterComponent', () => {
  let component: V3FooterComponent;
  let fixture: ComponentFixture<V3FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

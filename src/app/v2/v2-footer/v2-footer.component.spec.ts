import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2FooterComponent } from './v2-footer.component';

describe('V2FooterComponent', () => {
  let component: V2FooterComponent;
  let fixture: ComponentFixture<V2FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

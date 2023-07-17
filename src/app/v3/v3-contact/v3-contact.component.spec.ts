import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3ContactComponent } from './v3-contact.component';

describe('V3AboutComponent', () => {
  let component: V3ContactComponent;
  let fixture: ComponentFixture<V3ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2ContactComponent } from './v2-contact.component';

describe('V2ContactComponent', () => {
  let component: V2ContactComponent;
  let fixture: ComponentFixture<V2ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2ContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

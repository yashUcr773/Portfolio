import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2HomeComponent } from './v2-home.component';

describe('V2HomeComponent', () => {
  let component: V2HomeComponent;
  let fixture: ComponentFixture<V2HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

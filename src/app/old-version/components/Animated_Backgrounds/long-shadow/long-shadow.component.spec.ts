import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongShadowComponent } from './long-shadow.component';

describe('LongShadowComponent', () => {
  let component: LongShadowComponent;
  let fixture: ComponentFixture<LongShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongShadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

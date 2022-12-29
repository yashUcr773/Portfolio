import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMatrixComponent } from './animated-matrix.component';

describe('AnimatedMatrixComponent', () => {
  let component: AnimatedMatrixComponent;
  let fixture: ComponentFixture<AnimatedMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPuzzleSolverComponent } from './n-puzzle-solver.component';

describe('NPuzzleSolverComponent', () => {
  let component: NPuzzleSolverComponent;
  let fixture: ComponentFixture<NPuzzleSolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPuzzleSolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NPuzzleSolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

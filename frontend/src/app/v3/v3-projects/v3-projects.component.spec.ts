import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3ProjectsComponent } from './v3-projects.component';

describe('V3ProjectsComponent', () => {
  let component: V3ProjectsComponent;
  let fixture: ComponentFixture<V3ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3ProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V3ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

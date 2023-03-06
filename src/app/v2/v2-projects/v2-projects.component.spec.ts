import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2ProjectsComponent } from './v2-projects.component';

describe('V2ProjectsComponent', () => {
  let component: V2ProjectsComponent;
  let fixture: ComponentFixture<V2ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V2ProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

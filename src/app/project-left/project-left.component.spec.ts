import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLeftComponent } from './project-left.component';

describe('ProjectLeftComponent', () => {
  let component: ProjectLeftComponent;
  let fixture: ComponentFixture<ProjectLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLeftComponent]
    });
    fixture = TestBed.createComponent(ProjectLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

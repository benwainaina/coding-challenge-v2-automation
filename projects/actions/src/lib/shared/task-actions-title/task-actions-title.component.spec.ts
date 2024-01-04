import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskActionsTitleComponent } from './task-actions-title.component';

describe('TaskActionsTitleComponent', () => {
  let component: TaskActionsTitleComponent;
  let fixture: ComponentFixture<TaskActionsTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TaskActionsTitleComponent]
    });
    fixture = TestBed.createComponent(TaskActionsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

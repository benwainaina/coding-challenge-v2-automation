import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildActionInputPromptComponent } from './child-action-input-prompt.component';

describe('ChildActionInputPromptComponent', () => {
  let component: ChildActionInputPromptComponent;
  let fixture: ComponentFixture<ChildActionInputPromptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildActionInputPromptComponent]
    });
    fixture = TestBed.createComponent(ChildActionInputPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

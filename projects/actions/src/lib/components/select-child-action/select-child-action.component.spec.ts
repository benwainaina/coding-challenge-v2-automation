import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChildActionComponent } from './select-child-action.component';

describe('SelectChildActionComponent', () => {
  let component: SelectChildActionComponent;
  let fixture: ComponentFixture<SelectChildActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectChildActionComponent]
    });
    fixture = TestBed.createComponent(SelectChildActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

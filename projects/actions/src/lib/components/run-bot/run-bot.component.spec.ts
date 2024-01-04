import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunBotComponent } from './run-bot.component';

describe('RunBotComponent', () => {
  let component: RunBotComponent;
  let fixture: ComponentFixture<RunBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RunBotComponent]
    });
    fixture = TestBed.createComponent(RunBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

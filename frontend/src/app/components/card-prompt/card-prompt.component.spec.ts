import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPromptComponent } from './card-prompt.component';

describe('CardPromptComponent', () => {
  let component: CardPromptComponent;
  let fixture: ComponentFixture<CardPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

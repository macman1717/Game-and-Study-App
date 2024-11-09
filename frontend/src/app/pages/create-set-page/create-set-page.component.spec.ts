import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSetPageComponent } from './create-set-page.component';

describe('CreateSetPageComponent', () => {
  let component: CreateSetPageComponent;
  let fixture: ComponentFixture<CreateSetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSetPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

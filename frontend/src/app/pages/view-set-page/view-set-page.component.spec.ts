import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSetPageComponent } from './view-set-page.component';

describe('ViewSetPageComponent', () => {
  let component: ViewSetPageComponent;
  let fixture: ComponentFixture<ViewSetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSetPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

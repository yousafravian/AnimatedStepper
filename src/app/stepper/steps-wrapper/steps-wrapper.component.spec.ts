import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsWrapperComponent } from './steps-wrapper.component';

describe('StepperComponent', () => {
  let component: StepsWrapperComponent;
  let fixture: ComponentFixture<StepsWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepsWrapperComponent]
    });
    fixture = TestBed.createComponent(StepsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';
import {StepsWrapperComponent} from "./steps-wrapper/steps-wrapper.component";
import {StepsModel} from "./steps-wrapper/step/steps.model";
import {StepComponent} from "./steps-wrapper/step/step.component";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @ViewChild('stepsWrapperComponent') wrapper!: StepsWrapperComponent;

  _steps: StepsModel[] = [];
  @Input() set steps(stepsVal: StepsModel[]) {
    this._steps = stepsVal;

    setTimeout(() => {
      if(this._steps?.length > this.selectedIndex) {
        this.wrapper.selectStepByIndex(this.selectedIndex);
      }
    });
  }
  @Input() selectedIndex = 0;
  @Input() linear: boolean = false;
  @Input() direction: 'vertical' | 'horizontal' = 'horizontal';
  @Output() selectedIndexChange = new EventEmitter<number>();
}

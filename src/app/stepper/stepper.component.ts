import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() steps: StepsModel[] = [];
  @Input() linear: boolean = false;
  @Input() direction: 'vertical' | 'horizontal' = 'horizontal';
  selectedIndex: number = 0;
}

import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkStep, CdkStepperModule} from "@angular/cdk/stepper";

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  providers: [
    {provide: CdkStep, useExisting: StepComponent}
  ]
})
export class StepComponent extends CdkStep {
  @Input() icon?: string;
}

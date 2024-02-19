import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperComponent} from "./stepper/stepper.component";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {StepComponent} from "./stepper/step/step.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StepperComponent, CdkStepperModule, StepComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnimatedStepper';
}

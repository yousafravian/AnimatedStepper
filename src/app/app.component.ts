import {Component} from '@angular/core';
import {StepsModel} from "./stepper/steps-wrapper/step/steps.model";
import {StepperComponent} from "./stepper/stepper.component";
import {NgSwitch, NgSwitchCase} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    StepperComponent,
    NgSwitch,
    NgSwitchCase,
    FormsModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public steps: StepsModel[] = [
    {iconCss: 'menu', label: 'Orders'},
    {iconCss: 'menu', label: 'Review'},
    {label: 'Packing'},
    {iconCss: 'menu', label: 'Shipping'},
    {iconCss: 'menu', label: 'Extra'}
  ];


  // Test controls
  isLinear: boolean = false;
  isVertical: boolean = false;

}

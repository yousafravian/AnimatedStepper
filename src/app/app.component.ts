import {Component} from '@angular/core';
import {StepsModel} from "./stepper/steps-wrapper/step/steps.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public steps: StepsModel[] = [];

  constructor() {
    setTimeout(() => {
      this.steps = [
        {iconCss: 'menu', label: 'Orders'},
        {iconCss: 'menu', label: 'Review'},
        {iconCss: 'menu', label: 'Packing'},
        {iconCss: 'menu', label: 'Shipping'},
        {iconCss: 'menu', label: 'Extra'},
        {iconCss: 'menu', label: 'Extra'},
        {iconCss: 'menu', label: 'Extra'}
      ];
    }, 1000);
  }


  // Test controls
  isLinear = false;
  isVertical = false;
  selectedIndex = 2;

}

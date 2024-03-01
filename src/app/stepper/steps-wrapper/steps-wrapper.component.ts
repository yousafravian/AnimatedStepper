import {
  AfterContentInit,
  Component,
  ElementRef,
  inject, Input,
  Renderer2,
  ViewChild
} from '@angular/core';
import {NgFor, NgIf, NgTemplateOutlet} from '@angular/common';
import {CdkStepper, CdkStepperModule} from "@angular/cdk/stepper";
import {StepsModel} from "./step/steps.model";

@Component({
  selector: 'app-steps-wrapper',
  templateUrl: './steps-wrapper.component.html',
  styleUrls: ['./steps-wrapper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepsWrapperComponent}],
})
export class StepsWrapperComponent extends CdkStepper implements AfterContentInit {
  @ViewChild('stepperWrapper') el?: ElementRef<HTMLDivElement>;
  @ViewChild('stepContainerEl') stepContainerEl?: ElementRef<HTMLDivElement>;

  @Input() direction!: "vertical" | "horizontal";

  private renderer = inject(Renderer2);

  private transformStyle = `translate(-${100}%, -${50}%);`;

  percentageStep = 100;

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
    this.setLoaderStyles();
  }

  override ngAfterContentInit() {
    super.ngAfterContentInit();
  }

  private setLoaderStyles() {
    this.percentageStep = this.steps?.length ? (100 / (this.steps.length - 1)) : 0;
    this.transformStyle = `translate(${-100 + (this.percentageStep * this.selectedIndex)}%, -${50}%);`;
    this.renderer.setStyle(this.el?.nativeElement, '--loading-positioning', this.transformStyle);
    this.el?.nativeElement.style.setProperty('--loading-positioning', this.transformStyle)
  }
}

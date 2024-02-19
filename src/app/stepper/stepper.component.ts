import {
  AfterContentInit,
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild
} from '@angular/core';
import {NgFor, NgIf, NgTemplateOutlet} from '@angular/common';
import {CdkStepper, CdkStepperModule} from "@angular/cdk/stepper";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [NgTemplateOutlet, CdkStepperModule, NgFor, NgIf],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}],
})
export class StepperComponent extends CdkStepper implements AfterContentInit {
  @ViewChild('stepperWrapper') el?: ElementRef<HTMLDivElement>;

  renderer = inject(Renderer2);

  transformStyle = `translate(-${100}%, -${50}%);`;

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

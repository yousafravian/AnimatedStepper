import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {StepperComponent} from "./stepper/stepper.component";
import {StepsWrapperComponent} from "./stepper/steps-wrapper/steps-wrapper.component";
import {StepComponent} from "./stepper/steps-wrapper/step/step.component";

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepsWrapperComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CdkStepperModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

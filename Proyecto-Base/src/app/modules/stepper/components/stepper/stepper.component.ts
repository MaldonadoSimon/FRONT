import {Component} from '@angular/core';
import {StepperUi, Steps} from 'isapre-digital/models/stepper.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  selected: any;
  ui: StepperUi = {
    activeStep: 0,
  };
  steps: Steps[] = [
    {
      name: 'name1'
    },
    {
      name: 'name2'
    },
    {
      name: 'name3'
    },
  ];

  public getActiveStep(event) {
    this.selected = event;
  }

  public prevStep() {
    if (this.ui.activeStep > 0) {
      this.ui.activeStep -= 1;
    }
  }

  public nextStep() {
    const maxSteps = this.steps.length + 1;
    if (this.ui.activeStep <= maxSteps) {
      this.ui.activeStep += 1;
    }
  }

}

import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  SohoTimePickerComponent
} from 'ids-enterprise-ng';

@Component({
  selector: 'app-timepicker-demo',
  templateUrl: 'timepicker.demo.html',
})
export class TimePickerDemoComponent implements OnInit {

  @ViewChild(SohoTimePickerComponent, { static: false }) timepicker: SohoTimePickerComponent;

  public showModel = false;
  public timepickerDisabled = false;
  public timepickerReadOnly = false;
  startTime: any;
  formScheduleTriggerDetail: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.CreateFormGroup();
  }

  ngOnInit() {
    this.startTime = '0:50';
  }
  CreateFormGroup() {
    this.formScheduleTriggerDetail = this.formBuilder.group({
      startTime: [this.startTime]
    });
  }
  toggleModel() {
    this.showModel = !this.showModel;
  }

  onChange(event: Event) {
    console.log('TimepickerDemoComponent.onChange');
  }

  setEnable() {
    this.timepicker.disabled = false;
    this.timepickerDisabled = this.timepicker.disabled;
    this.timepickerReadOnly = this.timepicker.readonly;
  }

  setDisable() {
    this.timepicker.disabled = true;
    this.timepickerDisabled = this.timepicker.disabled;
  }

  setReadonly() {
    this.timepicker.readonly = true;
    this.timepickerReadOnly = this.timepicker.readonly;
  }
}

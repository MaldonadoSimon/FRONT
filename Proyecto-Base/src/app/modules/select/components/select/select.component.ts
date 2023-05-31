import {Component} from '@angular/core';
import {Option, SelectUi} from 'isapre-digital/models/select.mode';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  select: any;
  selectUi: SelectUi = {
    label: 'select',
    disabled: false,
    message: 'message',
    notfound: 'no encontrado',
    placeholder: 'selecciona',
    state: true,
  };
  selected: any;
  clearSelect: boolean;
  options: Option[] = [
    {
      label: 'opcion', value: 'value'
    }
  ];

  public getselectData(event) {
    this.select = event;
  }

}

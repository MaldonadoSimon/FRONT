import {Component, OnInit} from '@angular/core';
import {calendarUI} from 'isapre-digital/models/calendar.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  output: any;
  calendarUi: calendarUI;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    this.calendarUi = {
      inlineCalendar: false,
      disabled: false,
      label: 'Calendario',
      max: new Date('2021'),
      min: new Date('2000'),
      limitedRange: true,
      placeholder: 'Selecciona una fecha',
      range: false,
    };
  }

  public getCalendarData(event): void {
    this.output = event;
  }
}

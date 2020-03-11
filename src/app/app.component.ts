import { Component } from '@angular/core';

import { Event } from './event/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shedule: Event [];
  constructor() {
    this.shedule = [];
  }
  // tslint:disable-next-line:max-line-length
  addEvent(name: HTMLInputElement, startDay: HTMLInputElement, endDay: HTMLInputElement, durations: HTMLInputElement, place: HTMLInputElement): boolean {
    this.shedule.push(new Event(name.value, startDay.value, endDay.value, durations.value as unknown as number, place.value));
    name.value = '';
    startDay.value = '';
    endDay.value = '';
    durations.value = '';
    place.value = '';
    return false;
  }
  sortedshedule(): Event [] {
    this.shedule.sort((a: Event, b: Event) => b.durations - a.durations);
    return this.shedule;
  }
}

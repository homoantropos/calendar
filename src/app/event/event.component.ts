import { Component, Input, HostBinding, OnInit } from '@angular/core';

import { Event } from './event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
@Input () event: Event;

  constructor() { }

  ngOnInit() {
  }

}

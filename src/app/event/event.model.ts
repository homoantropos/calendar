export class Event {
  name: string;
  startDay: string;
  endDay: string;
  durations: number;
  place: string;
  constructor(name: string, startDay: string, endDay: string, durations: number, place: string) {
    this.name = name;
    this.startDay = startDay;
    this.endDay = endDay;
    this.durations = durations;
    this.place = place;
  }
}

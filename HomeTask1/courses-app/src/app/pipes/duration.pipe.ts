import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  hourFormat!: string;

  transform(value: string): string {
    const minutes = parseInt(value);
    let  hour = Math.floor(minutes / 60);
    let hourconvert = hour < 10 ? '0' + hour : hour;
    let minconvert = (minutes % 60) < 10 ? '0' + (minutes % 60) : (minutes % 60);
    if(hour <= 1) {
      this.hourFormat = `${hourconvert}:${minconvert} hour`;
    }
    else {
      this.hourFormat = `${hourconvert}:${minconvert} hours`;
    }
    return this.hourFormat;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('/').join('.');
  }

}

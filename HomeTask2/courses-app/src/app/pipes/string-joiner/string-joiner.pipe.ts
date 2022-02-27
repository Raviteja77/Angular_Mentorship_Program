import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(value: string[], joiner: string): string {
    return value?.join(joiner);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(courses: any, searchWord: string): any [] {
    let result = [];
    if(courses?.length != 0 && searchWord === '') {
      return courses;
    }
    for(let i = 0; i < courses?.length; i++) {
      if(courses[i].title.toLowerCase().includes(searchWord.toLowerCase()))
        result.push(courses[i]);
    }
    return result;
  }

}

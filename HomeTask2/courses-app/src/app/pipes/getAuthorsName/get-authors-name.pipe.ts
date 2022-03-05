import { Pipe, PipeTransform } from '@angular/core';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';

@Pipe({
  name: 'getAuthorsName'
})
export class GetAuthorsNamePipe implements PipeTransform {

  authorsName: string[] = [];

  constructor(private authorsFacade: AuthorsStateFacade) {
    this.authorsFacade.getAllAuthors();
  }

  transform(authorsId: string[]): string[] {
    this.authorsFacade.authors$.subscribe(data => {
      data.forEach((list: any) => {
        authorsId.forEach(authorId => {
          if(list.id === authorId) {
            this.authorsName.push(list.name);
          }
        })
      })
    })
    return this.authorsName;
  }

}

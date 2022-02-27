import { Pipe, PipeTransform } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';

@Pipe({
  name: 'getAuthorsName'
})
export class GetAuthorsNamePipe implements PipeTransform {

  authorsName: string[] = [];
  list: string[] = [];

  constructor(private authorsStore: AuthorsStoreService) {
    this.authorsStore.getAllAuthors();
    this.authorsStore.authors$.subscribe(data => {
      this.list = data;
    });
  }

  transform(authorsId: string[]): string[] {
    authorsId.forEach(authorId => {
      this.list.forEach((list: any) => {
        if(list['id'] === authorId) {
          this.authorsName.push(list['name']);
        }
      })
    })
    return this.authorsName;
  }

}

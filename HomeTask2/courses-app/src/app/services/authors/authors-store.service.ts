import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {


  private isLoading$$ = new BehaviorSubject<boolean>(true);
  private authors$$ = new BehaviorSubject<Array<any>>([]);

  public isLoading$ = this.isLoading$$.asObservable();
  public authors$ = this.authors$$.asObservable();

  constructor(private service: AuthorsService) { }

  getAllAuthors() {
    this.service.getAllAuthors().subscribe((data: any) => {
      this.authors$$.next(data.result);
      this.isLoading$$.next(false);
    })
  }

  addAuthor(authorName: string) {
    this.service.addAuthor(authorName).subscribe((data: any) => {
      this.authors$$.next(this.authors$$.value.concat(data.result));
    })
  }

}

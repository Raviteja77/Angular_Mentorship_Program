import { Component, Input, OnInit } from '@angular/core';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course!: any;

  authorsList!: any;
  isLoading: boolean = true;

  joiner: string = ', ';

  constructor(private authorsFacade: AuthorsStateFacade) {
    this.authorsFacade.getAllAuthors();
    this.authorsFacade.authors$.subscribe((data) => {
      this.authorsList = data;
    });
    this.authorsFacade.isLoading$.subscribe((data) => {
      this.isLoading = data;
    });
  }

  ngOnInit(): void {}
}

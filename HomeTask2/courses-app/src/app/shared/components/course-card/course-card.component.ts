import { Component, Input, OnInit } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {

  @Input()
  course!: any;

  authorsList!: any;
  isLoading!: boolean;

  joiner: string = ', ';
  
  constructor(private authors_store: AuthorsStoreService) {
    this.authors_store.getAllAuthors();
    this.authors_store.authors$.subscribe(data => {
      this.authorsList = data;
    })
    this.authors_store.isLoading$.subscribe(data => {
      this.isLoading = data;
    })
  }

  ngOnInit(): void {}
}

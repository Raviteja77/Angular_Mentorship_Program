import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  authorizationToken: string = '';
  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.isAuthorized$.subscribe(data => {
      this.authorizationToken = data; 
    })
   }

  getAllCourses() {
    return this.http.get('http://localhost:3000/courses/all');
  }

  getCourse(courseId: string) {
    return this.http.get(`http://localhost:3000/courses/${courseId}`);
  }

  createCourse(course: any, authors: string[]) {
    return this.http.post('http://localhost:3000/courses/add', {
      title: course.title,
      description: course.description,
      duration:
        typeof course.duration === 'string'
          ? parseInt(course.duration)
          : course.duration,
      authors: authors,
    },
    {
      headers: { Authorization: this.authorizationToken },
    })
  }

  editCourse(editCourse: any, authors: string[]) {
    return this.http.put(`http://localhost:3000/courses/${editCourse.id}`, {
      title: editCourse.title,
      description: editCourse.description,
      duration:
        typeof editCourse.duration === 'string'
          ? parseInt(editCourse.duration)
          : editCourse.duration,
      authors: authors,
    },
    {
      headers: { Authorization: this.authorizationToken },
    })
  }

  deleteCourse(courseId: string) {
    return this.http.delete(`http://localhost:3000/courses/${courseId}`, {
      headers: { Authorization: this.authorizationToken },
    })
  }
}

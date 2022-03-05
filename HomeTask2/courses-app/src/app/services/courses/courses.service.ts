import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthFacade } from 'src/app/auth/store/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  authorizationToken: string = '';
  constructor(private http: HttpClient, private authFacade: AuthFacade) {
    this.authFacade.getToken$.subscribe(data => {
      this.authorizationToken = data;
    })
   }

  getAllCourses() {
    return this.http.get(environment.endpoints.allCourses);
  }

  getCourse(courseId: string) {
    return this.http.get(`${environment.endpoints.courses}/${courseId}`);
  }

  createCourse(form: any) {
    return this.http.post(`${environment.endpoints.addCourse}`, {
      title: form.course.title,
      description: form.course.description,
      duration:
        typeof form.course.duration === 'string'
          ? parseInt(form.course.duration)
          : form.course.duration,
      authors: form.authors,
    },
    {
      headers: { Authorization: this.authorizationToken },
    })
  }

  editCourse(form: any) {
    return this.http.put(`${environment.endpoints.courses}/${form.course.id}`, {
      title: form.course.title,
      description: form.course.description,
      duration:
        typeof form.course.duration === 'string'
          ? parseInt(form.course.duration)
          : form.course.duration,
      authors: form.authors,
    },
    {
      headers: { Authorization: this.authorizationToken },
    })
  }

  deleteCourse(courseId: string) {
    return this.http.delete(`${environment.endpoints.courses}/${courseId}`, {
      headers: { Authorization: this.authorizationToken },
    })
  }
}

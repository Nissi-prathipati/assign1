import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/sample`)
          .pipe(
              map((res: any) => {
                  return res;
              })
          );
  }

  add(sample: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/sample`, sample);
  }

  update(sample: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/sample/${sample.id}`, sample);
  }

  delete(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/sample/${id}`);
  }
  
  private tasks: string[] = [];


  addTask(task: string): void {
    this.tasks.push(task);
  }

  getTasks(): string[] {
    return this.tasks;
  }
}

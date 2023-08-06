import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }
}

@Injectable({providedIn: 'root'})
export class FileService {
  private server = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    let username='aprajita602@gmail.com'
        let password='aprajita123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<string[]>(`${this.server}/file/upload`, formData, {
      headers,
      reportProgress: true,
      observe: 'events'
    });
  }

  // define function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {
    let username='aprajita602@gmail.com'
        let password='aprajita123'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get(`${this.server}/file/download/${filename}/`, {
      headers,
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

  login(username:string,password:string){
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
      return this.http.get("http://localhost:8080/file/login",{headers,responseType: 'text' as 'json'})
    }
    
      getUsers() {
        let username='aprajita602@gmail.com'
        let password='aprajita123'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
       return  this.http.get("http://localhost:8080/file/upload",{headers});
      }
    }
  

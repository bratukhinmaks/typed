import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Branch, Repos} from '../store/search.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public getUserRepos(user: string): Observable<Repos[]> {
    return this.http.get<Repos[]>(`${environment.apiUrl}/${user}/repos`);
  }

  getRepoBranches( branchName: string) {
    return this.http.get<Branch[]>(`${branchName}`);
  }
}

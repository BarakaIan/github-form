import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
repo: Service[]=[];
gitUrl= 'https://api.github.com/users/';
apiKey=`?access_tokens=${environment.prodt}`
  constructor(public http:HttpClient) { }
  findRepo(searchUser:string):Observable<any>{
    return this.http.get(this.gitUrl + searchUser + '/repos' + this.apiKey)
  }

}

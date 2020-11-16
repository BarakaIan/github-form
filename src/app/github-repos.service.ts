import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Profile } from './profile';
import { Service } from './service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GithubReposService {
user: Profile[]=[];
repo: Service[]=[];
gitUrl= 'https://api.github.com/users/';
apiKey=`?access_tokens=${environment.prodt}`



  constructor(private http: HttpClient) { }
  getgitUser(searchUser: string){
    interface apiResponse{
      name: string;
    followers: number;
    following: number;
    avatar_url: any;

    }
    return new Promise((resolve, reject)=>{
      this.user=[];
      this.http.get<apiResponse>(this.gitUrl + searchUser + this.apiKey).toPromise().then(
        (res)=>{
          this.user.push(res);
          resolve();
        },
        (error)=>{
          reject();
        }
        );
    });
  }

// getGithubPublicRepositories(){
//   const username = 'BarakaIan';
//   return this.http.get('https://api.github.com/users/&[username]/repos');
// }  
}

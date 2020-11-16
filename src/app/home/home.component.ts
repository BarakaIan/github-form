import { Component, OnInit } from '@angular/core';
import { GithubReposService } from '../github-repos.service';
import { Profile } from '../profile';
import { RepoService } from '../repo.service';
import { Service } from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: Profile[];
repo: Service[];
  constructor(public serviceUser:GithubReposService, public serviceRepo: RepoService) {}
 findgitUser(searchUser){
   this.serviceUser. getgitUser(searchUser).then(
     (success)=>{this.user=this.serviceUser.user},(error)=>{
       console.log (error);
     }
   );
   this.serviceRepo.findRepo(searchUser).subscribe(
     (success)=>{this.repo=success
    return(this.repo)}
   )
 }
  ngOnInit(): void {
    this.findgitUser("BarakaIan")
  }

}

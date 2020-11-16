import { Profile } from './profile';
import { Project } from './project';
import { Service } from './service'

export class Works{
  profile: Profile;
  project: Project;
  service: Service;

  constructor(){
    this.profile = new Profile();
    this.project = new Project();
    this.service = new Service();
  }

  startEngine(){
    this.profile.start();
  }
}
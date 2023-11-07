import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  constructor(private router: Router){}

  public toModifyUser(){
    this.router.navigate(['/profile/user']);
  }

  public toModifyCards(){
    this.router.navigate(['/profile/cards']);
  }
}

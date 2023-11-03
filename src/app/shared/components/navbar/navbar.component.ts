import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router){}

  public toLogin(){
    this.router.navigate(['/auth/login'])
  }

  public toRegister(){
    this.router.navigate(['/auth/register'])
  }

  public toContact(){
    this.router.navigate(['/contact'])
  }

}

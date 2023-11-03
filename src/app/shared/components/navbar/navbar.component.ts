import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  ocultarLogin: boolean = true;
  ocultarRegister: boolean = true;
  ocultarContacto: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/auth/login') {
          this.ocultarLogin = false;
        }else if(event.url === '/auth/register'){
          this.ocultarRegister = false;
        }else if(event.url === '/contact'){
          this.ocultarContacto = false;
        }
         else {
          this.ocultarLogin = true;
          this.ocultarRegister = true;
          this.ocultarContacto = true;
        }
      }
    });
  }

  public toLogin() {
    this.router.navigate(['/auth/login']);
  }


  public toRegister(){
    this.router.navigate(['/auth/register'])
  }

  public toContact(){
    this.router.navigate(['/contact'])
  }

  public toLanding(){
    this.router.navigate([''])
  }

}

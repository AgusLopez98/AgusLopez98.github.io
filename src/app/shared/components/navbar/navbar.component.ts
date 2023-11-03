import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  ocultarBoton: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/auth/login' || event.url === '/auth/register' || event.url === '/contact') {
          this.ocultarBoton = false;
        } else {
          this.ocultarBoton = true;
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

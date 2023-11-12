import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  ocultarLogin: boolean = true;
  ocultarRegister: boolean = true;
  ocultarHome: boolean = false
  ocultarContacto: boolean = true;
  ocultarProfile: boolean = false;
  ocultarCarrito: boolean = false;

  public user: User = this.dataService.getData();

  constructor(private router: Router, private dataService: DataService) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if (event.url === '/auth/login' || event.url === '/home' || event.url === '/profile' || event.url === '/profile/user' || event.url === '/profile/cards' || event.url === '/home/cart') {
          this.ocultarLogin = false;
        } else {
          this.ocultarLogin = true;
        }
        
        if(event.url === '/auth/register' || event.url === '/home' || event.url === '/profile' || event.url === '/profile/user' || event.url === '/profile/cards' || event.url === '/home/cart'){
          this.ocultarRegister = false;
        } else {
          this.ocultarRegister = true;
        }
 
        if(event.url === '/profile' || event.url === '/profile/user' || event.url === '/profile/cards' || event.url === '/home' || event.url === '/home/cart'){
          this.ocultarProfile = true;
          this.ocultarCarrito = true;
        } else {
          this.ocultarProfile = false;
          this.ocultarCarrito = false;
        }

        if(event.url === '/profile' || event.url === '/profile/user' || event.url === '/profile/cards' || event.url === '/home/cart'){
          this.ocultarHome = true;
        } else {
          this.ocultarHome = false;
        }
        
        if(event.url === '/contact'){
          this.ocultarContacto = false;
        }
         else {
          this.ocultarContacto = true;
        }
      }
    });
  }

  public toLogin() {
    this.router.navigate(['/auth/login']);
  }

  public toRegister(){
    this.router.navigate(['/auth/register']);
  }
  
  public toHome() {
    this.router.navigate(['/home']);
  }

  public toProfile(){
    this.router.navigate(['/profile']);
  }

  public toContact(){
    this.router.navigate(['/contact']);
  }

  public toLanding(){
    this.router.navigate(['']);
  }

  public toCart(){
    this.router.navigate(['/home/cart'])
  }

}

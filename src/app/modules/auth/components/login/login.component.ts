import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private UserService: UsersService, private router: Router){}

  public email: string = '';
  public password: string = '';

  //iniciar sesion
  public initSession(){
    this.UserService.getUserByCredentials(this.email!,this.password!).subscribe({
      next: (resp) =>{
        if(resp.length == 1){
          this.router.navigate(['/home']);
        }else{
          alert("Usuario no encontrado, intente nuevamente")
        }
      }
    })
  }

}

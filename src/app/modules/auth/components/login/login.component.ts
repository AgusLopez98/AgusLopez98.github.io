import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private UserService: UsersService, private router: Router, private dataService: DataService){}

  public email: string = '';
  public password: string = '';

  private user: User = new User({id: null})

  //iniciar sesion
  public initSession(){
    this.UserService.getUserByCredentials(this.email!,this.password!).subscribe({
      next: (resp) =>{
        if(resp.length == 1){
          this.router.navigate(['/home']);
          this.user = resp[0];
          this.dataService.setData(this.user);
        }else{
          alert("Usuario no encontrado, intente nuevamente")
        }
      }
    })
  }

}

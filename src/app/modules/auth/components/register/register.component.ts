import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card, User } from 'src/app/core/models';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user: User = new User({ id: null});
  public card: Card = new Card({number: null});

  constructor(private usersService: UsersService, private router: Router) { }

  //registrar nuevo usuario
  public addUserHome() {
    this.user.card = [this.card];
    this.usersService.registerToApiService(this.user).subscribe({
      next: (resp) => {
        if (resp) {
          alert(`Registrado con exito`);
          this.router.navigate(['/auth/login']);
        } else {
          alert(`El email ingresado ya se encuentra registrado`);
        }
      }
    })
  }

}


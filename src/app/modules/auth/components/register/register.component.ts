import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Card, User } from 'src/app/core/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router){

  }

  @Output() userRegister: EventEmitter<User> = new EventEmitter();

  public user: User = new User({id: null});
  public card: Card = new Card({id: null});

  public addUserRegister(){
    this.user.card?.push(this.card);
    this.userRegister.emit(this.user);
  }

}

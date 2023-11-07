import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-modify-user-page',
  templateUrl: './modify-user-page.component.html',
  styleUrls: ['./modify-user-page.component.css']
})
export class ModifyUserPageComponent {

  constructor(private dataService: DataService, private userService: UsersService, private router: Router){}

  public user: User = this.dataService.getData();

  public modifyUser(){
    this.userService.updateUserToApi(this.user).subscribe({
      next: (resp)=>{
        if(resp){
          alert('Perfil modificado con exito');
          this.router.navigate(['/home'])
        }
      },

      error: (error)=>{console.log(error);}
    })
  }

}

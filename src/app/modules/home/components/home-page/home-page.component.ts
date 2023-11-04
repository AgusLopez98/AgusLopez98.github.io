import { Component } from '@angular/core';
import { User } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  constructor(private apiService: ApiService) { }

  public addUserHome(user: User) {
    this.apiService.registerToApiService(user).subscribe({
      next: (resp) => {
        if (resp) {
          alert(`Registrado con exito`);
        } else {
          alert(`ERROR EN EL REGISTRO`);
        }
      }
    })
  }

}

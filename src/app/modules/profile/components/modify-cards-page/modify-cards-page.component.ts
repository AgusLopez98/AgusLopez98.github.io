import { Component } from '@angular/core';
import { Card, User } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-modify-cards-page',
  templateUrl: './modify-cards-page.component.html',
  styleUrls: ['./modify-cards-page.component.css']
})
export class ModifyCardsPageComponent {

  constructor(private userService: UsersService, private dataService: DataService) { }

  public user: User = this.dataService.getData();
  public mostrarEdit: boolean = false;
  public cardAux: Card = new Card({ number: null });

  private newArray: Array<Card> = [];

  public deleteCard(numberCard: number) {

    this.newArray = this.user.card!.filter(element => element.number !== numberCard);
    this.user.card = this.newArray;

    this.userService.updateUserToApi(this.user).subscribe({
      next: (resp) => {
        alert('Tarjeta eliminada correctamente');
      },
      error: (error) => {
        alert(`Error, no se pudo eliminar la tarjeta.`)
      }
    })
  }

  public onEdit() {
    this.mostrarEdit = true;
  }

  public addCard(){
    this.mostrarEdit = false;
    this.user.card?.push(this.cardAux);

    this.userService.updateUserToApi(this.user).subscribe({
      next: (resp) => {
        alert('Tarjeta añadida con exito');
      },
      error: (error) =>{
        alert(`Error, no se pudo agregar la tarjeta.`)
      }
    })
  }
}

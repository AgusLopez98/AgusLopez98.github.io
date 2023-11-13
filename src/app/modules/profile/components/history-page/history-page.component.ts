import { Component } from '@angular/core';
import { User } from 'src/app/core/models';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  constructor(private dataService: DataService){}

  public user: User = this.dataService.getData();

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ModifyUserPageComponent } from './components/modify-user-page/modify-user-page.component';
import { ModifyCardsPageComponent } from './components/modify-cards-page/modify-cards-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ModifyUserPageComponent,
    ModifyCardsPageComponent,
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ModifyUserPageComponent } from './components/modify-user-page/modify-user-page.component';
import { ModifyCardsPageComponent } from './components/modify-cards-page/modify-cards-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent
  },
  {
    path: 'user',
    component: ModifyUserPageComponent
  },
  {
    path: 'cards',
    component: ModifyCardsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

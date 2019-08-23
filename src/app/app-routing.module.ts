import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'servers', component: ServersComponent, children: [
    {path: ':id/edit', component: EditServerComponent},
    {path: ':id', component: ServerComponent },
  ]},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent }
  ] },

  ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}

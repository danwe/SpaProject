import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './moduels/dashborad/containers/dashborad/dashborad.component';


const routes: Routes = [
  { path: 'dashborad', component: DashboradComponent },
  { path: '',   redirectTo: '/dashborad', pathMatch: 'full' }, // redirect to `first-component`
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

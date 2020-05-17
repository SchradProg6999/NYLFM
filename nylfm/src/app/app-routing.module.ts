import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomebasePage } from './pages/homebase/homebase.component';

const routes: Routes = [
  { path: '',   redirectTo: 'homebase', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'homebase', component: HomebasePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

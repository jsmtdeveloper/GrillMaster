import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrillComponent } from './pages/grill/grill.component';
import { HomeComponent } from './pages/home/home.component';

/**
 * Const with the current routes of the app module
 */
const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grill', component: GrillComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/homr', pathMatch: 'full' }
];

/**
 * AppRoutin module definition
 */
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

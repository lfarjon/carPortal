import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './layout/empty/empty.component';
import { MainComponent } from './layout/main/main.component';
import { AuthGuard } from './shared/guards/auth.guard';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  {
    path: 'sign-in',
    component: EmptyComponent,
    loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: MainComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'add-car',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: MainComponent,
    loadChildren: () => import('./modules/add-car/add-car.module').then(m => m.AddCarModule)
  }
];

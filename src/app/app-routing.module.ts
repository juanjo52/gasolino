import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    /*children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'ranking',
        loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]*/
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'car/me/details/:name',
    loadChildren: () => import('./vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'vehiculo/nuevo',
    loadChildren: () => import('./forms/new-vehicle-form/new-vehicle-form.module').then( m => m.NewVehicleFormPageModule)
  },
  {
    path: 'editar-user',
    loadChildren: () => import('./forms/edit-profile-form/edit-profile-form.module').then( m => m.EditProfileFormPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        redirectTo: 'apod',
        pathMatch: 'full',
      },
      {
        path: 'apod',
        loadChildren: () =>
          import('./features/apod/apod.module').then((m) => m.ApodModule),
      },
      {
        path: 'mars-gallery',
        loadChildren: () =>
          import('./features/mars/mars.module').then((m) => m.MarsModule),
      },
      {
        path: 'asteroids',
        loadChildren: () =>
          import('./features/asteroids/asteroids.module').then(
            (m) => m.AsteroidsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

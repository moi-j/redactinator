import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consults-queue',
    loadChildren: () => import('./consult/consult.module').then(m => m.ConsultsModule)
  },
  {
    path: '',
    redirectTo: 'consults-queue',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

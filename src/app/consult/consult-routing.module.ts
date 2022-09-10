import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultListComponent} from "./views/consult-list/consult-list.component";
import {ConsultsResolver} from "./services/consults.resolver";


const routes: Routes = [
  {
    path: '',
    component: ConsultListComponent,
    resolve: {
      consults: ConsultsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultRoutingModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsultListComponent} from './views/consult-list/consult-list.component';
import {ConsultRoutingModule} from "./consult-routing.module";
import {MatCardModule} from "@angular/material/card";
import {ConsultSummaryComponent} from './components/consult-summary/consult-summary.component';
import {AttachmentRowComponent} from './components/attachment-row/attachment-row.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ConsultListComponent,
    ConsultSummaryComponent,
    AttachmentRowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsultRoutingModule,
    MatCardModule,
  ]
})
export class ConsultsModule { }

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Consult} from "../../types/types";

@Component({
  selector: 'app-consult-list',
  template: `
    <div class="min-350" fxFlex="100%" fxFlex.gt-md="50%" fxLayout="column" fxLayoutGap="2ch">
      <app-consult-summary *ngFor="let consult of consults; trackBy: trackByConsultId" [consult]="consult">
      </app-consult-summary>
    </div>
  `,
  styles: [
    `:host {
      padding: 24px;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultListComponent implements OnInit {

  consults: Consult[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ consults }) => {
      this.consults = consults;
    })
  }

  trackByConsultId: (index: number, consult: Consult) => Consult['id'] = (index, consult) => consult.id;

}

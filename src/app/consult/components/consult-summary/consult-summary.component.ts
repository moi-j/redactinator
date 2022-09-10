import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Consult} from "../../types/types";

@Component({
  selector: 'app-consult-summary',
  template: `
    <mat-card fxLayoutGap="1ch">
      <mat-card-title>e-Consult: #{{consult.id}}</mat-card-title>

      <app-attachment-row *ngFor="let attachment of consult.attachments" [attachment]="attachment">
      </app-attachment-row>
    </mat-card>
  `,
  styles: [
    `
        mat-card {
          min-width: fit-content;
        }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultSummaryComponent implements OnInit {
  @Input() consult!: Consult

  constructor() { }

  ngOnInit(): void {
  }

}

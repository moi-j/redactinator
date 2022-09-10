import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Attachment} from "../../types/types";

@Component({
  selector: 'app-attachment-row',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="start center" fxLayoutGap="2ch">
      <img [src]="attachment.thumbnail" alt="attachment for {{attachment.consult}}" width="200" height="200">

      <div fxLayout="row wrap" fxLayoutGap="2ch">
        <button mat-raised-button color="primary">No redaction needed</button>
        <button mat-raised-button color="accent">Redact</button>
      </div>
    </div>
  `,
  styles: [
    `
      img {
        margin: 1ch;
      }
      button {
        margin: 1ch;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttachmentRowComponent implements OnInit {
  @Input() attachment!: Partial<Attachment>;

  constructor() { }

  ngOnInit(): void {}
}

import { Injectable } from '@angular/core';
import {ATTACHMENTS, CONSULTS} from "../../../mocks/consults.mock";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultService {
  constructor() { }

  getConsults() {
    //  Will do a request to EndPoint <apiUrl>/consults
    const consultsWithAttachments = CONSULTS.map( consult => {
      return {
        ...consult,
        attachments: ATTACHMENTS.filter(attachment => attachment.consult === consult.id).map(attachment => ({
          id: attachment.id,
          thumbnail: attachment.thumbnail,
          is_checked: attachment.is_checked
        }))
      }
    })
    return of(consultsWithAttachments)
  }
}

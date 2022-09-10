export interface Censor {
  id: string;
  point: [number, number],
  width: number,
  height: number,
}

export interface Attachment {
  id: string;
  thumbnail: string;
  is_checked: boolean;
  is_redacted: boolean;
  image_url: string;
  censors: Censor[];
  consult: Consult['id'];
}

export interface Consult {
  id: string;
  attachments: Partial<Attachment>[];
  is_checked: boolean;
}


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentRowComponent } from './attachment-row.component';

describe('AttachmentRowComponent', () => {
  let component: AttachmentRowComponent;
  let fixture: ComponentFixture<AttachmentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

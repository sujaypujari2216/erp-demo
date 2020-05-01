import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSMSLogComponent } from './email-sms-log.component';

describe('EmailSMSLogComponent', () => {
  let component: EmailSMSLogComponent;
  let fixture: ComponentFixture<EmailSMSLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSMSLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSMSLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

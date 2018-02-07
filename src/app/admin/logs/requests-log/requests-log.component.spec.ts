import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsLogComponent } from './requests-log.component';

describe('RequestsLogComponent', () => {
  let component: RequestsLogComponent;
  let fixture: ComponentFixture<RequestsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

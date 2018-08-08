import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecontextpanelComponent } from './codecontextpanel.component';

describe('CodecontextpanelComponent', () => {
  let component: CodecontextpanelComponent;
  let fixture: ComponentFixture<CodecontextpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodecontextpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecontextpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

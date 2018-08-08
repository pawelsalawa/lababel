import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationpanelComponent } from './translationpanel.component';

describe('TranslationpanelComponent', () => {
  let component: TranslationpanelComponent;
  let fixture: ComponentFixture<TranslationpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

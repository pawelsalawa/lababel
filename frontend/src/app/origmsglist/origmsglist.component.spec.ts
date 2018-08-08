import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigmsglistComponent } from './origmsglist.component';

describe('OrigmsglistComponent', () => {
  let component: OrigmsglistComponent;
  let fixture: ComponentFixture<OrigmsglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigmsglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigmsglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

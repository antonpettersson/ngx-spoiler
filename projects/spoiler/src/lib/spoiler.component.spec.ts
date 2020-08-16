import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilerDirective } from './spoiler.component';

describe('SpoilerDirective', () => {
  let component: SpoilerDirective;
  let fixture: ComponentFixture<SpoilerDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpoilerDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoilerDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

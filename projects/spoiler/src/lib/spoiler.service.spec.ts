import { TestBed } from '@angular/core/testing';

import { SpoilerService } from './spoiler.service';

describe('SpoilerService', () => {
  let service: SpoilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpoilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

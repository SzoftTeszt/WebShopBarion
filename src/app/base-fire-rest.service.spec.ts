import { TestBed } from '@angular/core/testing';

import { BaseFireRestService } from './base-fire-rest.service';

describe('BaseFireRestService', () => {
  let service: BaseFireRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseFireRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

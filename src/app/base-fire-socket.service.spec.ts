import { TestBed } from '@angular/core/testing';

import { BaseFireSocketService } from './base-fire-socket.service';

describe('BaseFireSocketService', () => {
  let service: BaseFireSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseFireSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SerivcesService } from './serivces.service';

describe('SerivcesService', () => {
  let service: SerivcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerivcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

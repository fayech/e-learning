import { TestBed } from '@angular/core/testing';

import { CalendrireService } from './calendrire.service';


describe('CalendrireService', () => {
  let service: CalendrireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendrireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GroupEnseigService } from './group-enseig.service';

describe('GroupEnseigService', () => {
  let service: GroupEnseigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupEnseigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

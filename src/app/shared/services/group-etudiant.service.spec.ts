import { TestBed } from '@angular/core/testing';

import { GroupEtudiantService } from './group-etudiant.service';

describe('GroupEtudiantService', () => {
  let service: GroupEtudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupEtudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

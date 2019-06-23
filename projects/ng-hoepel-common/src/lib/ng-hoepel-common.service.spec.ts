import { TestBed } from '@angular/core/testing';

import { NgHoepelCommonService } from './ng-hoepel-common.service';

describe('NgHoepelCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgHoepelCommonService = TestBed.get(NgHoepelCommonService);
    expect(service).toBeTruthy();
  });
});

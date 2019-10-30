import { TestBed } from '@angular/core/testing';

import { BreedsListAllService } from './breeds-list-all.service';

describe('BreedsListAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreedsListAllService = TestBed.get(BreedsListAllService);
    expect(service).toBeTruthy();
  });
});

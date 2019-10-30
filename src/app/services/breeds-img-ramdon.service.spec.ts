import { TestBed } from '@angular/core/testing';

import { BreedsImgRamdonService } from './breeds-img-ramdon.service';

describe('BreedsImgRamdonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreedsImgRamdonService = TestBed.get(BreedsImgRamdonService);
    expect(service).toBeTruthy();
  });
});

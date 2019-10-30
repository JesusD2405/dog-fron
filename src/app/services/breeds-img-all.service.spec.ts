import { TestBed } from '@angular/core/testing';

import { BreedsImgAllService } from './breeds-img-all.service';

describe('BreedsImgAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreedsImgAllService = TestBed.get(BreedsImgAllService);
    expect(service).toBeTruthy();
  });
});

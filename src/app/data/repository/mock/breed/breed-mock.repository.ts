import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { breedData } from './breed-mock-data';
import { BreedModel } from '../../../../domain/models/breed.model';
import { BreedMockEntity } from './breed-mock.entity';
import { BreedRepository } from '../../../../domain/repositories/breed.repository';
import { BreedMockRepositoryMapper } from './breed-mock-repository-mapper';


@Injectable({
  providedIn: 'root'
})
export class BreedMockRepository extends BreedRepository {

  private mapper = new BreedMockRepositoryMapper();
  private breeds: BreedMockEntity;

  constructor() {
    super();
    this.breeds= breedData;
  }

  getAll(): Observable<BreedModel[]> {
    return from([ this.mapper.mapFrom(this.breeds) ]);
  }

  getBreedByName(name: string): Observable<BreedModel> {
    const breed = this.mapper.mapFrom(this.breeds).find(item => item.name === name);

    if(!breed)
      return from([]);
    
    return from([ breed ]);
  }
}
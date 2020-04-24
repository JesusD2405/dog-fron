import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { breeds } from './breed-mock-data';
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

  dataImg = {
    "message": "https://images.dog.ceo/breeds/hound-english/n02089973_846.jpg",
    "status": "success"
  }

  constructor() {
    super();
    this.breeds= breeds;
  }

  getAll(): Observable<BreedModel[]> {
    return from([ this.mapper.mapFrom(this.breeds) ]);
  }

  getBreedByName(name: string): Observable<BreedModel> {
    const breeds = this.mapper.mapFrom(this.breeds);

    return from([ breeds.find(item => item.name === name) ]);
  }
}
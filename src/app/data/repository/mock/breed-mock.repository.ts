import { Injectable } from '@angular/core';
import { BreedRepository } from '../../../core/repositories/breed.repository';
import { BreedModel } from '../../../core/domain/breed.model';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BreedMockEntity } from './breed-mock.entity';
import { BreedMockRepositoryMapper } from './breed-mock-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class BreedMockRepository extends BreedRepository {

  private mapper = new BreedMockRepositoryMapper();

  data = { 
    "message": {
      "Golden Retriever": [],
      "Husky Siberiano": [],
      "Buldog": [],
      "Pastor Aleman": [],
      "Pitbull": [],
      "Coker Spanish": [],
      "Boxer": [],
      "Labrador": [],
    },
    "status": "success"
  };

  constructor() {
    super();
  }

  getBreedByName(name: string): Observable<BreedModel> {
    return from(Object.keys(this.data.message))
      .pipe(filter((breed: any) => breed === name))
      .pipe(map(this.mapper.mapFrom));
  }

  getAllBreeds(): Observable<BreedModel[]> {
    return from([this.mapper.mapListFrom(this.data)]);
  }
}
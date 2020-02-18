import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { Observable } from 'rxjs';

// Models
import { BreedMockRepository } from '../../data/repository/mock/breed-mock.repository';
import { BreedModel } from '../domain/breed.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllBreedsUsecase implements UseCase<void, BreedModel> {

  constructor(private breedRepository: BreedMockRepository) { }

  execute(params: void): Observable<BreedModel[]> {
    return this.breedRepository.getAllBreeds();
  }
}
import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';

import { BreedRepository } from '../../repositories/breed.repository';
import { BreedModel } from '../../../domain/models/breed.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllBreedsUsecase implements UseCase<void, BreedModel[]> {

  constructor(private breedRepository: BreedRepository) { }

  execute(params: void): Observable<BreedModel[]> {
    return this.breedRepository.getAll();
  }
}
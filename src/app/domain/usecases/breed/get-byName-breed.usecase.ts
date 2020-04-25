import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BreedRepository } from '../../repositories/breed.repository';
import { ImageRepository } from '../../repositories/image.repository';
import { BreedModel } from '../../../domain/models/breed.model';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class GetBreedByNameUsecase implements UseCase<string, BreedModel> {

  constructor(
    private breedRepository: BreedRepository,
    private imageRepository: ImageRepository
  ) { }

  execute(param: string): Observable<BreedModel> {

    return new Observable(obs => {
      this.breedRepository.getBreedByName(param).subscribe(async (breed) => {
        let image = await this.imageRepository.getOneImage(breed.name).toPromise();
        breed.image.push(image);

        if(breed.subBreed.length){
            breed.subBreed.forEach(async(item) => {
                image = await this.imageRepository.getOneImage(breed.name).toPromise();
                item.image.push(image);
            });
        }
        obs.next(breed);
      });
    });
  }

}
import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BreedRepository } from '../../repositories/breed.repository';
import { ImageRepository } from '../../repositories/image.repository';
import { BreedModel } from '../../../domain/models/breed.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllBreedsUsecase implements UseCase<void, BreedModel[]> {

  constructor(
    private breedRepository: BreedRepository,
    private imageRepository: ImageRepository
  ) { }

  execute(params: void): Observable<BreedModel[]> {

    return new Observable(obs => {
      this.breedRepository.getAll().subscribe(async (breeds) => {
        
        if(breeds.length){
          let image= '';
          
          breeds.forEach(async(item) => {
            image= await this.imageRepository.getOneImage(item.name).toPromise();
            item.image.push(image);
          });
        }

        obs.next(breeds);
      });
    });
  }

}
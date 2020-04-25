import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';

import { ImageRepository } from '../../repositories/image.repository';

@Injectable({
  providedIn: 'root'
})
export class GetVariousImagesUsecase implements UseCase<number, string[]> {

  constructor(private imageRepository: ImageRepository) { }

  execute(param: number): Observable<string[]> {
    return this.imageRepository.getVariousImages(param);
  }
}
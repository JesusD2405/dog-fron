import { Injectable } from '@angular/core';
import { UseCase } from '../../base/use-case';
import { Observable } from 'rxjs';

import { ImageRepository } from '../../repositories/image.repository';

@Injectable({
  providedIn: 'root'
})
export class GetOneImagesUsecase implements UseCase<string, string> {

  constructor(private imageRepository: ImageRepository) { }

  execute(param: string): Observable<string> {
    return this.imageRepository.getOneImage(param);
  }
}
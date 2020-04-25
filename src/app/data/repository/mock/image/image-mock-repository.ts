import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { dataImg } from './image-mock-data';
import { BreedModel } from '../../../../domain/models/breed.model';
import { ImageMockEntity } from './image-mock.entity';
import { ImageRepository } from '../../../../domain/repositories/image.repository';
import { ImageMockRepositoryMapper } from './image-mock-repository-mapper';


@Injectable({
  providedIn: 'root'
})
export class ImageMockRepository extends ImageRepository {

  private mapper = new ImageMockRepositoryMapper();
  private images: ImageMockEntity;

  constructor() {
    super();
    this.images= dataImg;
  }

  getAllImages(): Observable<string[]> {
    return from([ ]);
  }

  getOneImage(): Observable<string> {
    return from([ this.mapper.mapFrom(this.images) ]);
  }

  getVariousImages(number: number): Observable<string[]> {
    return from([ ]);
  }
}
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

  oldStr: string;

  constructor() {
    super();
    this.images= dataImg;
    this.oldStr= "breed_name";
  }

  getAllImages(name: string): Observable<string[]> {
    const image = this.images.message.toString();
    const newStr = name;

    return from([ [image.replace(this.oldStr, newStr)] ]);
  }

  getOneImage(name: string): Observable<string> {
    const image = this.images.message.toString();
    const newStr = name;

    return from([ image.replace(this.oldStr, newStr) ]);
  }

  getVariousImages(number: number): Observable<string[]> {
    return from([ ]);
  }
}
import { BreedModel } from '../../../core/domain/breed.model';
import { Mapper } from '../../../core/base/mapper';
import { BreedMockEntity } from './breed-mock.entity';

export class BreedMockRepositoryMapper extends Mapper <BreedMockEntity, BreedModel> {
  mapFrom(param: any): BreedModel {
    return {
      name: param.message,
      image: [],
      subBreed: []
    };
  }

  mapListFrom(param: BreedMockEntity): Array<BreedModel> {
    return Object.keys(param.message).map(item => { 
      return { 
        'name': item, 
        'image': [], 
        'subBreed': []
      } 
    });
  }

  mapTo(param: BreedModel): BreedMockEntity {
    return {
        message: param.name,
        status: param.name
    };
  }
}
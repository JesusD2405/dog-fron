import { BreedModel } from '../../../../domain/models/breed.model';
import { SubBreedModel } from '../../../../domain/models/subBreed.model';
import { Mapper } from '../../../../domain/base/mapper';
import { BreedMockEntity } from './breed-mock.entity';

export class BreedMockRepositoryMapper extends Mapper <BreedMockEntity, BreedModel[]> {
  
  mapFrom(param: BreedMockEntity): BreedModel[] {
    return Object.keys(param.message).map(item => { 
      return { 
        'name': item, 
        'image': [], 
        'subBreed': []
      } 
    }); 
  }

  mapTo(param: BreedModel[]): BreedMockEntity {
    return {
      message: param,
      status: "success"
    };
  }
}
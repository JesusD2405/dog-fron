import { BreedModel } from '../../../../domain/models/breed.model';
import { SubBreedModel } from '../../../../domain/models/subBreed.model';
import { Mapper } from '../../../../domain/base/mapper';
import { BreedMockEntity } from './breed-mock.entity';

export class BreedMockRepositoryMapper extends Mapper <BreedMockEntity, BreedModel[]> {
  
  mapFrom(param: BreedMockEntity): BreedModel[] {
    let breeds = Object.keys(param.message);
    
    return breeds.map(item => { 
      return { 
        'name': item, 
        'image': [], 
        'subBreed': !param.message[item].length ? [] : param.message[item].map(data => {
          return {
            name: data,
            image: []
          }
        })
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
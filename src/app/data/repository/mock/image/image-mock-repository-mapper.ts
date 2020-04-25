import { Mapper } from '../../../../domain/base/mapper';
import { ImageMockEntity } from './image-mock.entity';

export class ImageMockRepositoryMapper extends Mapper <ImageMockEntity, string> {
  
  mapFrom(param: ImageMockEntity): string {
    return param.message.toString();
  }

  mapTo(param: string): ImageMockEntity {
    return {
      message: param,
      status: "success"
    };
  }
}
import { NgModule } from '@angular/core';

// Usecases
import { 
  GetAllBreedsUsecase,
  GetAllImagesUsecase,
  GetOneImagesUsecase,
  GetVariousImagesUsecase
} from '../../../domain/usecases/usecases';

// Core Repositories
import { BreedRepository } from '../../../domain/repositories/breed.repository';
import { ImageRepository } from '../../../domain/repositories/image.repository';

// Mock Repositories
import { BreedMockRepository } from './breed/breed-mock.repository';
import { ImageMockRepository } from './image/image-mock-repository';

@NgModule({
  imports: [ ],
  providers: [
    {
      provide: BreedRepository, useClass: BreedMockRepository
    },
    {
      provide: ImageRepository, useClass: ImageMockRepository
    },
    GetAllBreedsUsecase,
    GetAllImagesUsecase,
    GetOneImagesUsecase,
    GetVariousImagesUsecase
  ],
  declarations: [ ],
  exports: [ ]
})
export class MockModule { }
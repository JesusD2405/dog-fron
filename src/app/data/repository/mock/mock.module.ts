import { NgModule } from '@angular/core';

// Usecases
import { GetAllBreedsUsecase } from '../../../domain/usecases/usecases';

// Core Repositories
import { BreedRepository } from '../../../domain/repositories/breed.repository';

// Mock Repositories
import { BreedMockRepository } from './breed/breed-mock.repository';

@NgModule({
  imports: [ ],
  providers: [
    {
        provide: BreedRepository, useClass: BreedMockRepository
    },
    GetAllBreedsUsecase
  ],
  declarations: [ ],
  exports: [ ]
})
export class MockModule { }
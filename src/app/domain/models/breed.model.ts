import { SubBreedModel } from './subBreed.model'

export interface BreedModel {
    name: string;
    image: string[];
    subBreed: SubBreedModel[];
}
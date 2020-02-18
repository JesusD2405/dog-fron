import { Observable } from 'rxjs';
import { BreedModel } from '../domain/breed.model';

export abstract class BreedRepository {
  abstract getBreedByName(name: string): Observable<BreedModel>;
  abstract getAllBreeds(): Observable<BreedModel[]>;
}
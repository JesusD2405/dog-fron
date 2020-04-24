import { Observable } from 'rxjs';
import { BreedModel } from '../../domain/models/breed.model';

export abstract class BreedRepository {
  abstract getAll(): Observable<BreedModel[]>;
  abstract getBreedByName(name: string): Observable<BreedModel>;
}
import { Observable } from 'rxjs';

export abstract class ImageRepository {
  abstract getAllImages(name: string): Observable<string[]>;
  abstract getOneImage(name: string): Observable<string>;
  abstract getVariousImages(number: number): Observable<string[]>;
}
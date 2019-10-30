import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiHelper } from '../helpers/api.helper';

@Injectable({
  providedIn: 'root'
})
export class BreedsImgAllService {

  breedOnly = ApiHelper.Instance.api_base_url+'breed/';

  constructor(private http: HttpClient) { }

  getBreed(breed) {
    return this.http.get(this.breedOnly+breed+'/images/random/8');
  }
}

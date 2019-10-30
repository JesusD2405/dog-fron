import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiHelper } from '../helpers/api.helper';

@Injectable({
  providedIn: 'root'
})
export class BreedsListAllService {

  breedAll = ApiHelper.Instance.api_base_url+'breeds/list/all';

  constructor(private http: HttpClient) { }

  getBreedsAll() {
    return this.http.get(this.breedAll);
  }
}

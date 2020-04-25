import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiHelper {

  private static _instance: ApiHelper;
  
  public api_base_url: String;

  constructor() {
    this.api_base_url= environment.production ? 'https://dog.ceo/api/' : 'https://dog.ceo/api/';
   }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

}


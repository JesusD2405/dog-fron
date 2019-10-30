import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiHelper {

  private static _instance: ApiHelper;
  
  public api_base_url: String;

  constructor() {

    if (environment.production) 
    {
      /* Cuando este en produccion */

      // URL de la Api en el servidor
      this.api_base_url = 'https://dog.ceo/api/';
    }
    else
    {
      /* Cuando se corre en local */

      // URL de la Api en local
      this.api_base_url = 'https://dog.ceo/api/';
    }

   }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

}


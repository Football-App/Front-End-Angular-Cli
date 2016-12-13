import { Ciudad } from './ciudad';
import { Partido } from './partido';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { config } from '../footballapp.config';

import { Observable }     from 'rxjs/Observable';


@Injectable()
export class CiudadService {


  constructor(private http: Http) { }

  getCiudades(): Observable<Ciudad[]> {
    return this.http.get(config.API_URL_CIUDAD)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPartidosXCiudad(ciudad : Ciudad):Observable<Partido[]> {
    var body = 'ciudad='+ciudad.nombre;     
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions( { headers: headers });

    return this.http.post(config.API_URL_PARTIDOSxCUIDAD, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getCiudades2(): Promise<Ciudad[]> {
    return Promise.resolve(CIUDADES);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

 const  CIUDADES: Ciudad[] = [
  {nombre: 'Medellin'},
  {nombre: 'Bogota'},
  {nombre: 'Barranquilla'}
  ];

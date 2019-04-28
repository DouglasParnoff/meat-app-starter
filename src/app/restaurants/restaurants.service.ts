import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { MEAT_API } from '../app.api'
import { Restaurant } from "./restaurant/restaurant.model"
import { Observable } from "rxjs/Observable";


@Injectable()
export class RestaurantsService {
  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`);
  }
}
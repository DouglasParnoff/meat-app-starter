import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { MEAT_API }   from '../app.api'
import { Restaurant } from "./restaurant/restaurant.model"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "app/app.error-handler";


@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restaurantById(id: string):Observable<Restaurant>{
    console.log(`trying call http get to restaurants/id route to id ${id}`);
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}

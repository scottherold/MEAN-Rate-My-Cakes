import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HTTP requests

@Injectable()

export class HttpService {
  // <--- Constructors --->
  constructor(private _http: HttpClient) { }

  // <--- Methods --->
  // All Cakes
  getCakes() {
    return this._http.get('/cakes');
  };

  // Cake by ID
  getCake(id: string) {
    return this._http.get(`/cakes/${id}`);
  }

  // Create new cake
  addCake(newCake) {
    return this._http.post('/cakes', newCake);
  };

  // Create a new rating
  addRating(id: string, newRating) {
    return this._http.put(`/cakes/${id}/ratings`, newRating);
  };

  // Search cakes
  searchCakes(search: string) {
    return this._http.get(`/cakes/search/${search}`);
  };
}

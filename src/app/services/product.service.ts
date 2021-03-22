import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductModel[]> {
    // return of([ 
    //   {
    //     "id": 1,
    //     "name": "Apple",
    //     "price": 2.00
    //   },
    //   {
    //     "id": 1,
    //     "name": "Banana",
    //     "price": 2.50
    //   },
    //   {
    //     "id": 1,
    //     "name": "Orange",
    //     "price": 5.25
    //   }
    // ])
    var apiUrl = environment.apiUrl
    return this.http.get(`${apiUrl}/api/v1/products`) as Observable<ProductModel[]>;
  }
}

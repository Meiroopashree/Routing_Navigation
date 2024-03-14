import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl="https://ide-beeafcabeefc310569129ebdcbdfcddcfbone.premiumproject.examly.io/proxy/3001/product";

  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`).pipe();
  }

  public addProduct(product: Product): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, product).pipe();
  }

  public getProductById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/${id}`).pipe();
  }

}


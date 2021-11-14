import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Product} from'./product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  createProduct(ProductBody: any):Observable<Product[]>{
    const baseUrl= "http://localhost:3000/product";
    return this.httpClient.post<Product[]>(baseUrl,ProductBody);
  }
  viewAllProduct():Observable<Product[]>{
    const baseUrl= "http://localhost:3000/product";
    return this.httpClient.get<Product[]>(baseUrl);
  }
  viewProduct(productID:any):Observable<Product[]>{
    const baseUrl= "http://localhost:3000/product?id="+productID;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  updateProduct( ProductId: number,ProductBody: any):Observable<Product[]>{
    const baseUrl= "http://localhost:3000/product/"+ProductId;
    return this.httpClient.put<Product[]>(baseUrl,ProductBody);
   }
  deleteProduct(ProductId: number):Observable<Product[]>{
    const baseUrl= "http://localhost:3000/product/"+ProductId;
    return this.httpClient.delete<Product[]>(baseUrl);
  }
  searchCategoryProduct(categoryId:any):Observable<Product[]>{
    const baseUrl= "http://localhost:3000/product?categoryID="+categoryId;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  searchDateProduct(dateParam: string):Observable<Product[]>{
    const baseUrl= "http://localhost:3000/Product/category"+dateParam;
    return this.httpClient.get<Product[]>(baseUrl);
  }
  getCategory():Observable<Category[]>{
    const categoryUrl= "http://localhost:3000/categories";
    return this.httpClient.get<Category[]>(categoryUrl);
  }
}

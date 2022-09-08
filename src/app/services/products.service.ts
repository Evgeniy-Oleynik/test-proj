import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import {Product} from "../interfaces/product-interface";
import {ProductsData} from "../mock-data";
import {Observable, of} from "rxjs";
import { InMemoryDataService } from "../in-memory-data.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'api/productsData'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  selectedProduct: Product | undefined;
  isEditable: boolean = false;
  nextProduct: Product = {
    id: NaN,
    name: `New Product`,
    description: '',
    price: 0,
    count: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    // const products = of(ProductsData)
    // return products;
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
    // return this.productsData[id];
  }

  newProduct(): void {
    this.selectedProduct = { id: NaN, name: `New Product`, description: '', price: 0, count: 0,}
    // this.selectedProduct = {...this.nextProduct};
    // console.log(this.selectedProduct);
    // console.log(this.nextProduct);
    this.router.navigate(['/details', this.selectedProduct.id]);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.productsUrl, product, this.httpOptions);
    // ProductsData.push(product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.productsUrl}/${id}`, this.httpOptions);
    // ProductsData.splice(product.id - 1, 1);
  }

}

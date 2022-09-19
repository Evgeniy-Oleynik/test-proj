import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Product } from "../interfaces/product-interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsUrl = 'api/productsData'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  selectedProduct!: Product;
  isEditable: boolean = false;

  products$!: Observable<Product[]>;
  selectedProduct$!: Observable<Product>;
  productsData!: Product[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) { }

  getProducts() {
    // this.http.get<Product[]>(this.productsUrl).subscribe(prod => this.productsData = prod);
    // return this.productsData;
    this.products$ = this.http.get<Product[]>(this.productsUrl);
    return this.products$;
    // return this.products$;
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
    // return this.productsData[id];
  }

  // newProduct(): void {
    // this.selectedProduct = { id: NaN, name: `New Product`, description: '', price: 0, count: 0,}
    // this.selectedProduct = {...this.nextProduct};
    // console.log(this.selectedProduct);
    // console.log(this.nextProduct);
    // this.router.navigate(['/products', NaN]);
  // }

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

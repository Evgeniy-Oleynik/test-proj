import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Product } from "../interfaces/product-interface";
import {BehaviorSubject, map, Observable, shareReplay, tap} from "rxjs";
import {combineLatest} from "rxjs";


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

  products$!: Observable<Product[] | any>;
  selectedProduct$!: Observable<Product>;
  productsData!: Product[];

  allProducts$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  deletedProductId$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  deletedIds: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) {
    this.products$ = combineLatest([
      this.allProducts$,
      this.deletedProductId$,
    ]).pipe(
      // tap((res) => console.log(1111)),
      map(([products, id]) => {
        if (!id) {
          return products;
        } else {
          this.deletedIds = [...this.deletedIds, id];
          return products.filter((prod) => !this.deletedIds.includes(prod.id));
        }
      })
    )
  }

  getProducts() {
    // this.http.get<Product[]>(this.productsUrl).subscribe(prod => this.productsData = prod);
    // return this.productsData;
    // this.products$ = this.http.get<Product[]>(this.productsUrl);
    this.http.get<Product[]>(this.productsUrl).subscribe(
      (res) => {
        this.allProducts$.next(res);
      },
      (err) => console.log(err));
    return this.products$;
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
    // return this.selectedProduct$;
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
  }

  deleteProduct(id: number) {
    this.http.delete<Product>(`${this.productsUrl}/${id}`, this.httpOptions).subscribe(
      () => this.deletedProductId$.next(id)
    );
    // return this.products$.pipe(
    //   map(products => products.splice(id, 1)));
  }

}

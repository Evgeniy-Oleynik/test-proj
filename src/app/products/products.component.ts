import {Component, OnInit } from '@angular/core';
import { Product } from "../interfaces/product-interface";
import { ProductsService } from "../services/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import {map, Observable, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData!: Product[];
  products$: Observable<Product[] | any> = this.productsService.products$;
  totalSum!: number;

  totalSumSubscription!: Subscription;

  displayedColumns: string[] = ['name', 'description', 'price', 'count', 'total', 'delete', 'details'];
  displayedFooter: string[] = ['totalSum1', 'totalSum2'];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.getProducts();
    // this.activatedRoute.data.subscribe(({products}) => this.productsData = products);
    // this.productsService.products.subscribe((products) => this.productsData = products);
    // console.log(this.productsData);
  }

  ngOnDestroy(): void {
    this.totalSumSubscription.unsubscribe();
  }

  // getProducts() {
  //   this.productsData = this.productsService.getProducts();
  //   // this.productsService.getProducts()
  //   //   .subscribe(products => this.productsData = products);
  // }

  getTotalSum() {
    this.totalSumSubscription = this.products$.subscribe(products => this.totalSum = products
      .map((product: any) => product.price * product.count)
      .reduce((acc: number, val: number) => acc + val, 0))
    return this.totalSum;
  }

  // totalSum = this.products$.subscribe(products => products
  //   .map((product: any) => product.price * product.count)
  //   .reduce((acc: number, val: number) => acc + val, 0))
    // map(p => p.map(obj => obj.price * obj.count)
    //   .reduce((acc, value) => acc + value, 0))
  ;

  goDetails(id:number): void {
    this.router.navigate(['products/details', id]);
  }

  deleteProduct(id: number): Observable<any> {
    return this.products$.pipe(
      tap(prod => console.log(prod)),
      map(products => {
        console.log(products);
        products.splice(id, 1);
        console.log(products);
      })
    );
    // this.productsService.deleteProduct(id).subscribe();
    // this.getProducts();
  }

  newProduct(): void {
    this.router.navigate(['products/new']);
  }
}

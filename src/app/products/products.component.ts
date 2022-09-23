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
  totalSum$: Observable<number | any> = this.products$.pipe(
    map(products => products
      .reduce((acc: number, product: Product) => acc + product.price * product.count, 0)));

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
  }

  goDetails(id:number): void {
    this.router.navigate(['products/details', id]);
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe();
    this.productsService.products$.next();
    // this.getProducts();
  }

  newProduct(): void {
    this.router.navigate(['products/new']);
  }
}

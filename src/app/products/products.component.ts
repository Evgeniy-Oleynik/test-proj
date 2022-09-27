import {Component, OnInit } from '@angular/core';
import { Product } from "../interfaces/product-interface";
import { ProductsService } from "../services/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  BehaviorSubject, combineLatest, first, forkJoin,
  map,
  Observable, of, shareReplay,
  startWith,
  Subject,
  Subscription,
  switchMap,
  take,
  tap,
  withLatestFrom
} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData!: Product[];
  allProducts$: Observable<Product[] | any> = this.productsService.products$;
  products$: Observable<Product[] | any> = this.productsService.products$;
  productsSubject$: Subject<Product[]> = new Subject<Product[]>();
  deletedProductSubject$: Subject<number> = new Subject<number>();
  clickDeleteProductSubject$: Subject<void> = new Subject<void>();
  deletedIds: number[] = [];
  productsSubscription$!: Subscription;

  totalSum$!: Observable<number | any>;
  displayedColumns: string[] = ['name', 'description', 'price', 'count', 'total', 'delete', 'details'];
  displayedFooter: string[] = ['totalSum1', 'totalSum2'];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {

    // this.products$ = this.clickDeleteProductSubject$.pipe(
    //   withLatestFrom(this.allProducts$),
    //   map(([_,prods]) => {
    //     prods.filter((prod: Product) => !this.deletedIds.includes(prod.id));
    //   })
    // );

    this.productsSubscription$ = this.clickDeleteProductSubject$.pipe(
      withLatestFrom(this.allProducts$),
      map(([_,prods]) => {
        this.products$ = of(prods.filter((prod: Product) => !this.deletedIds.includes(prod.id)));
        this.totalSum$ = this.products$.pipe(
          map(products => products
            .reduce((acc: number, product: Product) => acc + product.price * product.count, 0)));
      })
    ).subscribe()


    // this.products$ = this.deletedProductsSubject$.pipe(
    //   tap(res => {debugger}),
    //   switchMap(ids => this.allProducts$.pipe(
    //     map(allProds => {
    //       // return [ids, allProducts];
    //       return {ids, allProds};
    //     }),
    //     take(1)
    //   )),
    //   // withLatestFrom(this.allProducts$),
    //   tap(({ids, allProds}) => {debugger}),
    //   map(({ids, allProds}: {ids: number[], allProds: Product[]}) => allProds.filter(prod => !ids.includes(prod.id)))
    // );
    // this.products$.subscribe(val => console.log(val));

    this.totalSum$ = this.products$.pipe(
      map(products => products
        .reduce((acc: number, product: Product) => acc + product.price * product.count, 0)));
  }

  ngOnDestroy(): void {
    this.productsSubscription$.unsubscribe();
  }

  goDetails(id:number): void {
    this.router.navigate(['products/details', id]);
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe();
    this.clickDeleteProductSubject$.next();
    this.deletedIds = [...this.deletedIds, id];
  }

  newProduct(): void {
    this.router.navigate(['products/new']);
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, take} from "rxjs";
import {ProductsService} from "../services/products.service";
import {Product} from "../interfaces/product-interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product[]>{

  constructor( private productsService: ProductsService ) { }

  resolve(): Observable<Product[]> {
    return this.productsService.getProducts()
      .pipe(take(1));
  }
}

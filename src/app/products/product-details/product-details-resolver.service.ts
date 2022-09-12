import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../interfaces/product-interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsResolverService implements Resolve<Product> {

  constructor( private productsService: ProductsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    return this.productsService.getProduct(parseInt(<string>route.paramMap.get('id')));
  }
}

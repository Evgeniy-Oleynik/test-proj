import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ProductsService } from "../../services/products.service";
import {Product} from "../../interfaces/product-interface";
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  newProduct$ = new Observable<Product>(product => {
    product.next({
      id: NaN,
      name: '',
      description: '',
      price: NaN,
      count: NaN
    });
    });

  constructor(
    private location: Location,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  addProduct(newProduct: Product) {
    this.productsService.addProduct(newProduct).subscribe();
    this.goBack();
    alert(`${newProduct.name} added`);
  }

}

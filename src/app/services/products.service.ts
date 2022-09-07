import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import {Product} from "../interfaces/product-interface";
import {ProductsData} from "../mock-data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  selectedProduct: Product | undefined;
  isEditable: boolean = false;
  nextProduct: Product = {
    id: ProductsData.length + 1,
    name: `New Product`,
    description: '',
    price: 0,
    count: 0,
  }

  constructor(
    private route: ActivatedRoute,
    // private http: HttpClient,
    private router: Router,
  ) { }

  productsData: Product[] = ProductsData;

  getProducts(): Product[] {
    return this.productsData;
  }

  getProduct(id: number): Product {
    return this.productsData[id];
  }

  newProduct(): void {
    this.selectedProduct = this.nextProduct;
    this.router.navigate(['/details', this.selectedProduct.id]);
  }

  updateProduct(product: Product): void {
    console.log(ProductsData[product.id - 1]);
    console.log(product);
    ProductsData.push(product);
    console.log(ProductsData[product.id - 1]);
  }

  deleteProduct(product: Product): void {
    ProductsData.splice(product.id - 1, 1);
  }

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

}

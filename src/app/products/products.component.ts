import {Component, OnInit } from '@angular/core';
import { Product } from "../interfaces/product-interface";
import { ProductsService } from "../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // productsData: Product[] = ProductsData;
  productsData!: Product[];

  displayedColumns: string[] = ['name', 'description', 'price', 'count', 'total', 'delete', 'details'];
  displayedFooter: string[] = ['totalSum1', 'totalSum2'];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.getProducts();
    this.activatedRoute.data.subscribe(({products}) => this.productsData = products);
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(products => this.productsData = products);
  }

  getTotalSum() {
    return this.productsData.map(p => p.price * p.count).reduce((acc, value) => acc + value, 0);
  }

  goDetails(product: Product): void {
    this.productsService.selectedProduct = product;
    this.router.navigate(['products', product.id]);
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe();
    this.getProducts();
  }

  newProduct(): void {
    this.productsService.newProduct();
  }
}

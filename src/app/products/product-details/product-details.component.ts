import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {FormBuilder, FormGroup} from "@angular/forms";
import { ProductsService } from "../../services/products.service";
import {Product} from "../../interfaces/product-interface";
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // isEditable: boolean = false;
  selectedProduct$!: Observable<Product>;
  editedProduct!: Product;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProduct();
    // this.activatedRoute.data.subscribe(({product}) => this.selectedProduct = product);
  }

  getProduct(): void {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.selectedProduct$ = this.productsService.getProduct(id);
  }

  goBack() {
    this.location.back();
  }

  updateProduct(editedProduct: Product) {
    this.productsService.updateProduct(editedProduct).subscribe();
    this.goBack();
    alert(`${editedProduct.name} updated`);
  }

}

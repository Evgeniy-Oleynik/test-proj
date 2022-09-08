import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { FormBuilder } from "@angular/forms";
import { ProductsService } from "../services/products.service";
import {Product} from "../interfaces/product-interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  isEditable: boolean = false;
  selectedProduct: Product | undefined;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    // console.log(id);
    if (isNaN(id)) {
      this.toggleEdit();
      this.selectedProduct = this.productsService.nextProduct;
    }
    else {
      this.productsService.getProduct(id)
        .subscribe(product => this.selectedProduct = product);
    }
  }

  toggleEdit() {
    // this.productsService.toggleEdit();
    this.isEditable = !this.isEditable;
  }

  goBack() {
    this.location.back();
  }

  cancel() {
    window.location.reload();
  }

  save() {
    if (this.selectedProduct) {
      const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
      if (isNaN(id)) {
        this.productsService.addProduct(this.selectedProduct);
      }
      else {
        this.productsService.updateProduct(this.selectedProduct);
      }
      this.toggleEdit();
    }
    // this.productsService.updateProduct(this.selectedProduct);
  }

  productDetailsForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    count: '',
  });


}

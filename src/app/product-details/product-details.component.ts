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
  selectedProduct: Product = this.getProduct();

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.selectedProduct = this.getProduct();
  }

  getProduct(): Product {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    // console.log(id);
    if (id===this.productsService.nextProduct.id) {
      this.toggleEdit();
      return this.productsService.nextProduct;
    }
    else {
      return this.productsService.getProduct(id-1);
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
    this.productsService.updateProduct(this.selectedProduct);
    this.toggleEdit();
  }

  productDetailsForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    count: '',
  });


}

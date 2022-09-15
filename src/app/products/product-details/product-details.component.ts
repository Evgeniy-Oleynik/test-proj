import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder } from "@angular/forms";
import { ProductsService } from "../../services/products.service";
import {Product} from "../../interfaces/product-interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  isEditable: boolean = false;
  selectedProduct: Product = this.productsService.selectedProduct;

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
    if (this.selectedProduct) {
      this.productsService.getProduct(this.selectedProduct.id)
        .subscribe();
    }
    else {
      const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
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
    this.productsService.updateProduct(this.selectedProduct).subscribe();
    this.goBack();
  }


  productDetailsForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    count: '',
  });


}

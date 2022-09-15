import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder } from "@angular/forms";
import { ProductsService } from "../../services/products.service";
import {Product} from "../../interfaces/product-interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  newProduct: Product = {
    id: NaN,
    name: '',
    description: '',
    price: NaN,
    count: NaN,
  };

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  cancel() {
    window.location.reload();
  }

  save() {
    this.productsService.addProduct(this.newProduct).subscribe();
    this.goBack();
  }

  newProductForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    count: '',
  });


}

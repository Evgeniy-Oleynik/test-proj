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
  selectedProduct!: Product;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.getProduct();
    this.activatedRoute.data.subscribe(({product}) => this.selectedProduct = product);
  }

  getProduct(): void {
    const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(id);
    if (isNaN(id)) {
      this.toggleEdit();
      this.selectedProduct = {...this.productsService.nextProduct};
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
      const id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
      if (isNaN(id)) {
        this.productsService.addProduct(this.selectedProduct).subscribe();
      }
      else {
        this.productsService.updateProduct(this.selectedProduct).subscribe();
      }
      this.goBack();
      // this.toggleEdit();
      // this.ngOnInit();
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

import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {map, Observable} from "rxjs";
import {Product} from "../../../interfaces/product-interface";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  isEditable: boolean = true;
  selectedProduct!: Product;
  @Input() selectedProduct$!: Observable<Product>;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.getSelectedProduct();
  }

  getSelectedProduct() {
    this.selectedProduct$.subscribe(prod => this.selectedProduct = prod);
    console.log(this.selectedProduct);
  }

  productDetailsForm = new FormGroup({
    name: new FormControl({value: '', disabled: !this.isEditable}),
    description: new FormControl({value: '', disabled: !this.isEditable}),
    price: new FormControl({value: '', disabled: !this.isEditable}),
    count: new FormControl({value: '', disabled: !this.isEditable}),
  })

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, Subscription} from "rxjs";
import {Product} from "../../../interfaces/product-interface";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  productSubscription!: Subscription;
  // isEditable: boolean = true;

  productDetailsForm = new FormGroup({
    id: new FormControl(NaN),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl(NaN,[Validators.required, Validators.min(0)]),
    count: new FormControl(NaN,[Validators.required, Validators.min(0)]),
  })

  resetProduct!: Product;
  @Input() selectedProduct$!: Observable<Product>;
  @Input() isEditable!: boolean;
  @Output() editedProduct = new EventEmitter<any>();

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productSubscription = this.selectedProduct$.subscribe(prod => {
      this.productDetailsForm.setValue(prod);
      this.resetProduct = prod;
    })
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  toggleEdit() {
    this.isEditable = true;
  }

  onSubmit() {
    this.editedProduct.emit(this.productDetailsForm.value);
  }

  onCancel() {
    this.productDetailsForm.setValue(this.resetProduct);
    this.isEditable = false;
  }
}

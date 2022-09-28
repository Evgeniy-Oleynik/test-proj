import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, map, Observable, startWith, Subject, Subscription, tap, withLatestFrom} from "rxjs";
import {Product} from "../../../interfaces/product-interface";
import {ProductsService} from "../../../services/products.service";


@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {
  @Input() set selectedProduct(value: Product | null) {
    if (value) {
      this.selectedProductSubject$.next(value);
    }
  }

  @Input() isEditable = false;
  @Output() editedProduct = new EventEmitter<any>();

  productSubscription!: Subscription;
  private selectedProductSubject$: Subject<Product> = new Subject<Product>();
  private resetFormSubject$: Subject<void> = new Subject<void>();

  productDetailsForm = new FormGroup<any>({
    id: new FormControl(NaN),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl(NaN || null, [Validators.required, Validators.min(0.01)]),
    count: new FormControl(NaN || null, [Validators.required, Validators.min(0.01)]),
  })

  constructor(
    private productsService: ProductsService,
  ) {
  }

  ngOnInit(): void {
    this.selectedProductSubject$.subscribe(data => {
        this.productDetailsForm.patchValue(data);
        this.productDetailsForm.disable();
      }
    )

    this.resetFormSubject$.pipe(
      withLatestFrom(this.selectedProductSubject$),
      tap(val => console.log(2, val)),
    ).subscribe(([, formData]) => {
      this.productDetailsForm.reset(formData);
      this.productDetailsForm.disable();
      this.isEditable = false;
    });
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }

  toggleEdit() {
    this.isEditable = true;
    this.productDetailsForm.enable();
  }

  onSubmit() {
    debugger
    this.editedProduct.emit(this.productDetailsForm.value);
  }

  onCancel() {
    this.resetFormSubject$.next();
  }
}

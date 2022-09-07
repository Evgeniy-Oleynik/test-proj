import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsRoutingModule } from "./product-details-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule { }

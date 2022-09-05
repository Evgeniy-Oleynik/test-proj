import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsRoutingModule } from "./product-details-routing.module";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MatIconModule,
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule { }

import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsRoutingModule } from "./product-details-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/modules/shared.module";

@NgModule({
  imports: [
    ProductDetailsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule { }

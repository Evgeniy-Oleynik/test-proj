import { NgModule } from "@angular/core";

import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsRoutingModule } from "./product-details-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/modules/shared.module";
import { CoreModule } from "../../shared/modules/core.module";

@NgModule({
  imports: [
    ProductDetailsRoutingModule,
    // ReactiveFormsModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule { }

import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProductsRoutingModule } from "./products-routing.module";

import { SharedModule } from "../shared/modules/shared.module";

@NgModule({
  imports: [
    ProductsRoutingModule,
    SharedModule,
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }

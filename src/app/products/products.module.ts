import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProductsRoutingModule } from "./products-routing.module";

import { SharedModule } from "../shared/modules/shared.module";
import { CoreModule } from "../shared/modules/core.module";
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  imports: [
    ProductsRoutingModule,
    SharedModule,
    CoreModule,
  ],
  exports: [
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }

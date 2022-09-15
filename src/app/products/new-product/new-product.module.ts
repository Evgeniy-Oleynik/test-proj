import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/modules/shared.module";
import { CoreModule } from "../../shared/modules/core.module";
import { NewProductComponent } from "./new-product.component";
import { NewProductRoutingModule } from "./new-product-routing.module";

@NgModule({
  imports: [
    NewProductRoutingModule,
    // ReactiveFormsModule,
    SharedModule,
    CoreModule,
  ],
  declarations: [ NewProductComponent ]
})
export class NewProductModule { }
